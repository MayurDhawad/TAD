import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, Label, Row } from 'reactstrap';
import * as Yup from 'yup';
// import { sendEmail } from '../../helpers';
import SuccessToast from '../Common/SuccessToast';

const BannerLeadgen = () => {

    const [submitted, setSubmitted] = useState(false);
    const [langList] = useState(["English", "Hindi", "Tamil", "Telugu", "Malayalam", "Arabic"]);
    const [langDrop, setLangDrop] = useState(false);
    const toggleLangDrop = () => {
        setLangDrop(!langDrop);
    }

    const leadgenSchema = Yup.object().shape({
        userName: Yup.string().required('Enter Valid Name'),
        mobile: Yup.string().min(10, 'Enter Valid Mobile no.').max(10, 'Enter Valid Mobile no.').required('Enter Valid Mobile no.'),
        email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
        language: Yup.string().required('Enter Valid Language'),
    });

    const showToast = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        // console.log(submitted)
    }

    const sendEmail = (userData) => {
        const method = "/send-email";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => {
            })
            .catch((err) => { console.log(err) })
    }

    const sendThankYouEmail = (userData) => {
        const method = "/send-thankyou-email";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => {
            })
            .catch((err) => { console.log(err) })
    }

    const handleSubmit = (userData) => {
        sendEmail(userData);
        sendThankYouEmail(userData);
        const method = "/add";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => {
                if (res.status === 200) {
                    showToast();
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <Container>
            <div className='banner-leadgen'>
                <div className='heading-wrapper'>
                    <p className='leadgen-heading'>Take your career to the next level with TAD Online Training</p>
                </div>
                <Formik
                    initialValues={{
                        userName: '',
                        mobile: '',
                        email: '',
                        language: '',
                    }}
                    validationSchema={leadgenSchema}
                    onSubmit={(values, { resetForm }) => {
                        // console.log(values);
                        handleSubmit(values);
                        resetForm();
                    }}
                >
                    {({ errors, touched, setFieldValue, values }) => (

                        <Form className='leadgen-form'>
                            <Row>
                                <Col lg="3" className={errors.userName && touched.userName ? "form-group error" : "form-group"}>
                                    <Field type="text" name="userName" autoComplete="off"
                                        className={values.userName ? "form-control active" : "form-control"}
                                        onChange={(event) => { setFieldValue('userName', event.target.value.replace(/[\d!@#$%^&*()_+\-=[\]{};~`':"\\|,.<>/?]/g, "")) }} />
                                    <Label>Your Name</Label>
                                    {errors.userName && touched.userName ? (<div className='form-error'>{errors.userName}</div>) : null}
                                </Col>
                                <Col lg="3" className={errors.mobile && touched.mobile ? "form-group error" : "form-group"}>
                                    <Field type="number" name="mobile" autoComplete="off"
                                        className={values.mobile ? "form-control active" : "form-control"} />
                                    <Label>Mobile Number</Label>
                                    {errors.mobile && touched.mobile ? (<div className='form-error'>{errors.mobile}</div>) : null}
                                </Col>
                                <Col lg="3" className={errors.email && touched.email ? "form-group error" : "form-group"}>
                                    <Field type="text" name="email" autoComplete="off"
                                        className={values.email ? "form-control active" : "form-control"} />
                                    <Label>Email Address</Label>
                                    {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null}
                                </Col>
                                <Col lg="3" className={(errors.language && touched.language ? "form-group drop error " : "form-group drop ") + (langDrop ? "open " : " ") + (values.language ? "active" : "")}>

                                    <Button type="button" onClick={() => toggleLangDrop()} autoComplete="off"
                                        className={(values.language ? "form-control active " : "form-control ") + "text-start"}>{values.language}</Button>
                                    <Label>Preferred Language</Label>
                                    <Dropdown isOpen={langDrop} toggle={() => { }} direction={"down"}>
                                        <DropdownMenu className="mt-2 w-100">
                                            {
                                                langList && langList.map((lang) => (
                                                    <DropdownItem key={lang} onClick={() => { setFieldValue('language', lang); setLangDrop(false); }}>
                                                        {lang}
                                                    </DropdownItem>
                                                ))
                                            }
                                        </DropdownMenu>
                                    </Dropdown>
                                    {errors.language && touched.language ? (<div className='form-error'>{errors.language}</div>) : null}
                                </Col>
                                <Col lg="12" className='form-group d-flex justify-content-center'>
                                    <Button type="submit" className="common-btn red" color='danger'>Let’s Connect</Button>
                                </Col>
                                {
                                    submitted ? (<SuccessToast />) : null
                                }

                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}

export default BannerLeadgen