import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Label, Row } from 'reactstrap'
import * as Yup from 'yup';
import axios from 'axios';

const NewsletterForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const leadgenSchema = Yup.object().shape({
        email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
    });

    const handleSubmit = (userData) => {
        sendThankYouEmail(userData);
        const method = "/add-emailer";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => {
                if (res.status === 200) {
                    setSubmitted(true);
                }
            })
            .catch((err) => { console.log(err) })
    }

    const sendThankYouEmail = (userData) => {
        const method = "/send-thankyou-email";
        axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
            .then((res) => { })
            .catch((err) => { console.log(err) })
    }

    return (
        <div className='newsletter-form'>
            {
                submitted ? (
                    <p className='thankyou-section'>
                        <img src={require('../../assets/images/blog/thankyou-tick.svg').default} alt="thankyou" />
                        <span>Thank You</span>You Have been Subscribed
                    </p>
                ) : (
                    <Row className='align-items-center'>
                        <Col xl="7" lg="6" md="12">
                            <p className='lead-txt'>
                                Be the first to get our exclusive blogs straight to your inbox! Subscribe now.
                            </p>
                        </Col>
                        <Col xl="5" lg="6" md="12">
                            <Formik
                                initialValues={{
                                    email: '',
                                }}
                                validationSchema={leadgenSchema}
                                onSubmit={(values, { resetForm }) => {
                                    // console.log(values);
                                    handleSubmit(values);
                                    resetForm();
                                }}
                            >
                                {({ errors, touched, values }) => (

                                    <Form className='leadgen-form'>
                                        <Row>
                                            <Col lg="7" xs="8" className={errors.email && touched.email ? "form-group pb-0 error" : "form-group pb-0"}>
                                                <Field type="text" name="email" autoComplete="off"
                                                    className={values.email ? "form-control active" : "form-control"} />
                                                <Label>Email Address</Label>
                                                {/* {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null} */}
                                            </Col>
                                            <Col lg="5" xs="4" className='form-group pb-0 ps-md-2 ps-0 d-flex justify-content-center'>
                                                <Button type="submit" className="common-btn w-100 px-1 red" color='danger'>Subscribe</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                )
            }

        </div>
    )
}

export default NewsletterForm