import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import * as Yup from 'yup';
import SuccessToast from '../Common/SuccessToast';

const EnrollNowModal = (props) => {

    const [submitted, setSubmitted] = useState(false);

    const showToast = () => {
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); props.toggle() }, 5000);
        // console.log(submitted)
    }

    const leadgenSchema = Yup.object().shape({
        userName: Yup.string().required('Enter Valid Name'),
        mobile: Yup.string().min(10, 'Enter Valid Mobile no.').max(10, 'Enter Valid Mobile no.').required('Enter Valid Mobile no.'),
        email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
    });

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
                    // props.toggle();
                }
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>

            <ModalBody className='p-0'>
                <div className='leadgen-popup'>
                    <div className='heading rounded-top'>
                        <span className='close' onClick={props.toggle}>
                            <img src={require('../../assets/images/home/leadgen-popup/popup-close.svg').default} alt="close" />
                        </span>
                        <p>Please leave your details for a callback</p>
                    </div>
                    {
                        submitted ? (<SuccessToast />) : (
                            <Formik
                                initialValues={{
                                    userName: '',
                                    mobile: '',
                                    email: '',
                                    language: 'English',
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
                                            <Col xs="12" className={errors.userName && touched.userName ? "form-group error" : "form-group"}>
                                                <Field type="text" name="userName" autoComplete="off"
                                                    className={values.userName ? "form-control active" : "form-control"}
                                                    onChange={(event) => { setFieldValue('userName', event.target.value.replace(/[\d!@#$%^&*()_+\-=[\]{};~`':"\\|,.<>/?]/g, "")) }} />
                                                <Label>Your Name</Label>
                                                {errors.userName && touched.userName ? (<div className='form-error'>{errors.userName}</div>) : null}
                                            </Col>
                                            <Col xs="12" className={errors.mobile && touched.mobile ? "form-group error" : "form-group"}>
                                                <Field type="number" name="mobile" autoComplete="off"
                                                    className={values.mobile ? "form-control active" : "form-control"} />
                                                <Label>Mobile Number</Label>
                                                {errors.mobile && touched.mobile ? (<div className='form-error'>{errors.mobile}</div>) : null}
                                            </Col>
                                            <Col xs="12" className={errors.email && touched.email ? "form-group error" : "form-group"}>
                                                <Field type="text" name="email" autoComplete="off"
                                                    className={values.email ? "form-control active" : "form-control"} />
                                                <Label>Email Address</Label>
                                                {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null}
                                            </Col>

                                            <Col xs="12" className='form-group pb-2'>
                                                <Button type="submit" className="common-btn red d-block mx-auto" color='danger'>Submit</Button>
                                            </Col>

                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        )
                    }

                </div>
            </ModalBody>
        </Modal>
    )
}

export default EnrollNowModal
