import { Field, Formik, Form } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, Label, Row } from 'reactstrap';
import axios from 'axios';
import * as Yup from 'yup';
import courseData from '../../courseData';
import { useParams } from 'react-router-dom';

const ExamBannerForm = (props) => {

    const courses = Object.keys(courseData).map((item) => (courseData[item].name))
    const [submitted, setSubmitted] = useState(false);
    const [langList] = useState(courses);
    const [langDrop, setLangDrop] = useState(false);
    const toggleLangDrop = () => {
        setLangDrop(!langDrop);
    }

    const { selectedCourse } = useParams();

    const leadgenSchema = Yup.object().shape({
        userName: Yup.string().required('Enter Valid Name'),
        mobile: Yup.string().min(10, 'Enter Valid Mobile no.').max(10, 'Enter Valid Mobile no.').required('Enter Valid Mobile no.'),
        email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
        course: Yup.string().required('Enter Valid Course'),
    });

    const showToast = () => {
        setSubmitted(true);
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
        const method = "/add-exam";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => {
                if (res.status === 200) {
                    showToast();
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (

        <div className='landing-form'>
            {
                submitted ? (
                    <div className='landing-scan'>
                        <h3>Scan QR Code</h3>
                        <p className='landing-sutitle'>Make payment and secure your spot today</p>
                        <div className='landing-qrcode'>
                            <img src={require('../../assets/images/exam-landing/QRcode.svg').default} />
                            <div className='counselor-care'>
                                <p>Post payment, Email screenshot to <a href="mailto:counsellor@tadcourses.com">counselor@tadcourses.com</a>WhatsApp <a href="tel:+91 9899934562">(+91 9899934562)</a> for confirmation. Call <a href="tel:+91 9899934562">(+91 9899934562)</a>for further queries.</p>

                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3>Register For TAD Entrance Exam Now</h3>
                        <Formik
                            initialValues={{
                                userName: '',
                                mobile: '',
                                email: '',
                                course: courseData[selectedCourse]?.name ? courseData[selectedCourse].name : '',
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
                                        <Col lg="6" className={errors.userName && touched.userName ? "form-group error" : "form-group"}>
                                            <Field type="text" name="userName" autoComplete="off"
                                                className={values.userName ? "form-control active" : "form-control"}
                                                onChange={(event) => { setFieldValue('userName', event.target.value.replace(/[\d!@#$%^&*()_+\-=[\]{};~`':"\\|,.<>/?]/g, "")) }} />
                                            <Label>Your Name</Label>
                                            {errors.userName && touched.userName ? (<div className='form-error'>{errors.userName}</div>) : null}
                                        </Col>
                                        <Col lg="6" className={errors.email && touched.email ? "form-group error" : "form-group"}>
                                            <Field type="text" name="email" autoComplete="off"
                                                className={values.email ? "form-control active" : "form-control"} />
                                            <Label>Email Address</Label>
                                            {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null}
                                        </Col>
                                        <Col lg="6" className={errors.mobile && touched.mobile ? "form-group error" : "form-group"}>
                                            <Field type="number" name="mobile" autoComplete="off"
                                                className={values.mobile ? "form-control active" : "form-control"} />
                                            <Label>Mobile Number</Label>
                                            {errors.mobile && touched.mobile ? (<div className='form-error'>{errors.mobile}</div>) : null}
                                        </Col>
                                        <Col lg="6" className={(errors.course && touched.course ? "form-group drop error " : "form-group drop ") + (langDrop ? "open " : " ") + (values.course ? "active" : "")}>

                                            <Button type="button" onClick={() => toggleLangDrop()} autoComplete="off"
                                                className={(values.course ? "form-control active " : "form-control ") + "text-start"}>{values.course}</Button>
                                            <Label>Course</Label>
                                            <Dropdown isOpen={langDrop} toggle={() => { }} direction={"down"}>
                                                <DropdownMenu className="mt-2 w-100">
                                                    {
                                                        langList && langList.map((lang) => (
                                                            <DropdownItem key={lang} onClick={() => { setFieldValue('course', lang); setLangDrop(false); }}>
                                                                {lang}
                                                            </DropdownItem>
                                                        ))
                                                    }
                                                </DropdownMenu>
                                            </Dropdown>
                                            {errors.course && touched.course ? (<div className='form-error'>{errors.course}</div>) : null}
                                        </Col>
                                        <Col lg="12" className='form-group d-flex justify-content-center pb-4'>
                                            <Button type="submit" className="common-btn red" color='danger'>Apply</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </>
                )
            }


        </div>
    )
}

export default ExamBannerForm