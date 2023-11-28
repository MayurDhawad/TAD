import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Container, Label, Row } from 'reactstrap'
import * as Yup from 'yup';
import axios from 'axios';

const DetailsNewsletter = () => {

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

        <Container className='details-form-wrapper'>
            <div className='details-newsletter-form'>
                {
                    submitted ? (
                        <p className='thankyou-section'>
                            <img src={require('../../assets/images/blog/thankyou-tick.svg').default} alt="thankyou" />
                            <span>Thank You! </span> You have been subscribed.
                        </p>
                    ) : (
                        <Row className='align-items-center justify-content-between'>
                            <Col xl="5" lg="6" md="12">
                                <div className='lead-txt'>
                                    <p className='title'>Subscribe to our newsletter today!</p>
                                    <p className='subtitle'>Receive the latest updates, insights, and news on a range of topics.</p>
                                </div>
                            </Col>
                            <Col xl="6" lg="6" md="12">
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
                                            <Row className='justify-content-center align-items-start'>
                                                <Col lg="7" xs="12" className={errors.email && touched.email ? "form-group error" : "form-group"}>
                                                    <Field type="text" name="email" autoComplete="off"
                                                        className={values.email ? "form-control active" : "form-control"} />
                                                    <Label>Email Address</Label>
                                                    {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null}
                                                </Col>
                                                <Col lg="5" xs="5" className='form-group ps-md-2 pb-0 d-flex justify-content-center'>
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
        </Container>
    )
}

export default DetailsNewsletter