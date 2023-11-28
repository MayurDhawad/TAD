import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, Label, Row } from 'reactstrap';
import * as Yup from 'yup';
import SuccessToast from '../Common/SuccessToast';

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const [langList] = useState(["Admission", "Placement Enquiry", "Others"]);
    const [langDrop, setLangDrop] = useState(false);
    const toggleLangDrop = () => {
        setLangDrop(!langDrop);
    }

    const leadgenSchema = Yup.object().shape({
        userName: Yup.string().required('Enter Valid Name'),
        mobile: Yup.string().min(10, 'Enter Valid Mobile no.').max(10, 'Enter Valid Mobile no.').required('Enter Valid Mobile no.'),
        email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
        lookingFor: Yup.string().required('Select Valid Option'),
        query: Yup.string().required('Enter Valid Query'),
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
        const method = "/add-contact";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => {
                if (res.status === 200) {
                    showToast();
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div className='contact-form-wrapper'>
            <p className='contact-form-title'>Get In Touch</p>
            <div className='contact-form'>
                <Formik
                    initialValues={{
                        userName: '',
                        mobile: '',
                        email: '',
                        lookingFor: '',
                        query: '',
                    }}
                    validationSchema={leadgenSchema}
                    onSubmit={(values, { resetForm }, setFieldValue) => {
                        // console.log(values);
                        handleSubmit(values);
                        resetForm();
                    }}
                >
                    {({ errors, touched, setFieldValue, values, handleBlur }) => (

                        <Form className='leadgen-form'>
                            <Row>
                                <Col xl="6" lg="12" className={errors.userName && touched.userName ? "form-group error" : "form-group"}>
                                    <Field type="text" name="userName" autoComplete="off"
                                        className={values.userName ? "form-control active" : "form-control"}
                                        onChange={(event) => { setFieldValue('userName', event.target.value.replace(/[\d!@#$%^&*()_+\-=[\]{};~`':"\\|,.<>/?]/g, "")) }} />
                                    <Label>Your Name</Label>
                                    {errors.userName && touched.userName ? (<div className='form-error'>{errors.userName}</div>) : null}
                                </Col>
                                <Col xl="6" lg="12" className={errors.mobile && touched.mobile ? "form-group error" : "form-group"}>
                                    <Field type="number" name="mobile" autoComplete="off"
                                        className={values.mobile ? "form-control active" : "form-control"} />
                                    <Label>Mobile Number</Label>
                                    {errors.mobile && touched.mobile ? (<div className='form-error'>{errors.mobile}</div>) : null}
                                </Col>
                                <Col xl="6" lg="12" className={errors.email && touched.email ? "form-group error" : "form-group"}>
                                    <Field type="text" name="email" autoComplete="off"
                                        className={values.email ? "form-control active" : "form-control"} />
                                    <Label>Email Address</Label>
                                    {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null}
                                </Col>
                                <Col xl="6" lg="12" className={(errors.lookingFor && touched.lookingFor ? "form-group drop error " : "form-group drop ") + (langDrop ? "open " : " ") + (values.lookingFor ? "active" : "")}>

                                    <Button type="button" onClick={() => toggleLangDrop()} autoComplete="off"
                                        className={(values.lookingFor ? "form-control active " : "form-control ") + "text-start"}
                                        onBlur={handleBlur("lookingFor")}>{values.lookingFor}</Button>
                                    <Label>What Are You Looking For</Label>
                                    <Dropdown isOpen={langDrop} toggle={() => { }} direction={"down"}>
                                        <DropdownMenu className="mt-2 w-100">
                                            {
                                                langList && langList.map((lang) => (
                                                    <DropdownItem key={lang} onClick={() => { setFieldValue('lookingFor', lang); setLangDrop(false); }}>
                                                        {lang}
                                                    </DropdownItem>
                                                ))
                                            }
                                        </DropdownMenu>
                                    </Dropdown>
                                    {errors.lookingFor && touched.lookingFor ? (<div className='form-error'>{errors.lookingFor}</div>) : null}
                                </Col>
                                <Col xl="12" className={errors.query && touched.query ? "form-group error" : "form-group"}>
                                    <textarea type="text" name="query" autoComplete="off"
                                        className={values.query ? "form-control active" : "form-control"}
                                        onChange={(event) => { setFieldValue('query', event.target.value) }}
                                        value={values.query}
                                        onBlur={handleBlur("query")}>
                                    </textarea>
                                    <Label>Drop your query here</Label>
                                    {errors.query && touched.query ? (<div className='form-error'>{errors.query}</div>) : null}
                                </Col>
                                <Col xl="12" className='form-group pb-0'>
                                    <Button type="submit" className="common-btn red" color='danger'>Send</Button>
                                </Col>
                                {
                                    submitted ? (<SuccessToast />) : null
                                }

                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ContactForm