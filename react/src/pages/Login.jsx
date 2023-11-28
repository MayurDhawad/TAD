import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Col, Container, Label, Row } from 'reactstrap'
import CustomLayout from '../layouts/CustomLayout'
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [togglePass, setTogglePass] = useState(false);

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Enter Valid Email').required('Enter Valid Email'),
        password: Yup.string().required('Enter Valid Password'),
    });

    return (
        <CustomLayout noFooter>

            <Container fluid>
                <Row className='login-container'>
                    <Col lg="6" className='login-banner'>
                        <div className='login-main'>
                            <img src={require('../assets/images/login/login-banner.svg').default}></img>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className='login-form'>
                            <div className='login-title'>
                                <h5>Login</h5>
                                <p>Login now and kickstart your learning journey with TAD</p>
                            </div>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={loginSchema}
                                onSubmit={(values, { resetForm }) => {
                                    // console.log(values);
                                    navigate('/entrance-exam');
                                    resetForm();
                                }}
                            >
                                {({ errors, touched, values }) => (
                                    <Form className='leadgen-form'>
                                        <Row>
                                            <Col lg="12" className={errors.email && touched.email ? "form-group error" : "form-group"}>
                                                <Field type="text" name="email" autoComplete="off"
                                                    className={values.email ? "form-control active" : "form-control"} />
                                                <Label>Email</Label>
                                                {errors.email && touched.email ? (<div className='form-error'>{errors.email}</div>) : null}
                                            </Col>
                                            <Col lg="12" className={errors.password && touched.password ? "form-group error" : "form-group"}>
                                                <Field type={togglePass ? 'text' : 'password'} name="password" autoComplete="off"
                                                    className={values.password ? "form-control active" : "form-control"} />
                                                <Label>Password</Label>
                                                {errors.password && touched.password ? (<div className='form-error'>{errors.password}</div>) : null}
                                                <Button className='login-eyeslash' type='button' onClick={()=>{setTogglePass(!togglePass)}}>
                                                    {
                                                        togglePass ? (
                                                            <img src={require('../assets/images/login/eyeclose-slash.svg').default} />
                                                        ) : (
                                                            <img src={require('../assets/images/login/eye-slash.svg').default} />
                                                        )
                                                    }


                                                </Button>
                                            </Col>
                                            <div class="remeb-for-pass">
                                                <input type="checkbox" id="Remember1" name="Remember1" value="Remember me" class="d-none" />
                                                <label for="Remember1">Remember my Password</label>
                                            </div>
                                            <Col lg="12" className='form-group pb-0'>
                                                <Button type="submit" className="common-btn red d-block mx-auto mx-sm-0" color='danger'>Login</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                            <div className='login-help'>
                                <span>Need login help?</span>
                                <p>Contact us at<a href="mailto:counsellor@tadcourses.com">counsellor@tadcourses.com</a>or WhatsApp +91 9899934562.</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </CustomLayout>
    )
}

export default Login