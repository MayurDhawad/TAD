import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Label, Row } from "reactstrap";
import * as Yup from 'yup';
import SuccessToast from "../Common/SuccessToast";

const HireBannerLeadgen = () => {
  const [submitted, setSubmitted] = useState(false);

  const leadgenSchema = Yup.object().shape({
    userName: Yup.string().required("Enter Valid Name"),
    mobile: Yup.string()
      .min(10, "Enter Valid Mobile no.")
      .max(10, "Enter Valid Mobile no.")
      .required("Enter Valid Mobile no."),
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Enter Valid Email"),
    companyName: Yup.string().required("Enter Valid Company Name"),
  });

  const showToast = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    // console.log(submitted)
  };

  const sendEmail = (userData) => {
    const method = "/send-email";
    axios
      .post(process.env.REACT_APP_NODE_URL + method, { ...userData })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const sendThankYouEmail = (userData) => {
    const method = "/send-thankyou-email";
    axios
      .post(process.env.REACT_APP_NODE_URL + method, { ...userData })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (userData) => {
    sendEmail(userData);
    sendThankYouEmail(userData);
    const method = "/add-hire";
    axios
      .post(process.env.REACT_APP_NODE_URL + method, { ...userData })
      .then((res) => {
        if (res.status === 200) {
          showToast();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div className="banner-leadgen hire-banner-leadgen">
        <div className="heading-wrapper">
          <p className="leadgen-heading">Drop Your Details</p>
          <p className="leadgen-sub-heading">Let us find the perfect candidate for your business</p>
        </div>
        <Formik initialValues={
          {
            userName: "",
            mobile: "",
            email: "",
            companyName: ""
          }}
          validationSchema={leadgenSchema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values);
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched, setFieldValue, values }) => (
            <Form className="leadgen-form">
              <Row className="align-items-start">
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
                    {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : <span className="info-note small">Share business email ID for quick assistance</span>}
                </Col>
                <Col lg="3" className={errors.companyName && touched.companyName ? "form-group error" : "form-group"}>
                    <Field type="text" name="companyName" autoComplete="off"
                        className={values.companyName ? "form-control active" : "form-control"} />
                    <Label>Company Name</Label>
                    {errors.companyName && touched.companyName ? (<div className='form-error'>{errors.companyName}</div>) : null}
                </Col>
                <Col lg="12" className='form-group d-flex justify-content-center'>
                  <Button type="submit" className="common-btn red" color='danger'>Start Hiring</Button>
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
  );
};

export default HireBannerLeadgen;
