import React, { useState } from 'react';
import '../css/style.css';
import '../css/auth.css';
import '../css/signup.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo from '../img/logo.webp';
import axios from 'axios';
import { Baseurl } from '../baseurl';
import Alert from './alert';
import { useHistory } from 'react-router';

const Signup = () => {
    const history = useHistory();
    const [alert, setAlert] = useState({ status: '', message: '', show: false })
    return (
        <>
            <div class="container-fluid signup-body">
                <div class="auth">

                    <div class="head">
                        <div class="text-center">
                            <a href="/" >
                                <img src={logo} alt="Our Logo" />
                            </a>
                        </div>
                    </div>

                    <Formik
                        initialValues={{
                            fullname: '',
                            username: '',
                            password: '',
                            passwordRepeat: '',
                            email: '',
                            phone: '',
                            secretQ: '',
                            secretA: '',
                            agree: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.fullname) {
                                errors.fullname = '*Fullname Required';
                            }
                            else if (!values.username) {
                                errors.username = '*Username Required';
                            }
                            else if (!values.password) {
                                errors.password = '*Password Required';
                            }
                            else if (values.password.length < 8) {
                                errors.password = '*Password Should be 8 characters';
                            }
                            else if (values.password !== values.passwordRepeat) {
                                errors.passwordRepeat = '*Password does not match';
                            } else if (!values.email) {
                                errors.email = '*Email Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            } else if (!values.phone) {
                                errors.phone = '*Phone Number Required';
                            } else if (!values.secretQ) {
                                errors.secretQ = '*Secret Question Required';
                            }
                            else if (!values.secretA) {
                                errors.secretA = '*Secret Answer Required';
                            }
                            else if (!values.agree) {
                                errors.agree = '*Please Agree with our terms';
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(true)
                                axios.post(`${Baseurl}signup`, values).then((res) => {
                                    if (res.data.email) {
                                        setSubmitting(false);
                                        let response = res.data.email
                                        history.push(`/account-verification/${response}`)
                                    } else if (res.data.error) {
                                        setAlert(alert => ({
                                            ...alert,
                                            status: 'error',
                                            message: 'Cannot send code right now!'
                                        }))
                                        setSubmitting(false);
                                    }
                                }).catch((error) => {
                                    if (error.response.status === 422) {
                                        setSubmitting(false);
                                        setAlert(alert => ({
                                            ...alert,
                                            status: 'error',
                                            message: 'Username, Phone Number or Email Already Taken',
                                            show: true
                                        }))
                                        setTimeout(() => {
                                            setAlert(alert => ({
                                                ...alert,
                                                show: false
                                            }))
                                        }, 2000)
                                    }
                                })
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (

                            <Form>
                                <div class="main d-flex">
                                    <div class="right order-1">
                                        <h1 class="title mb-5">
                                            <span class="icon">
                                                <i className="fa fa-user text-light"></i>
                                            </span>
                                            <span class="t">Create a new account</span>
                                        </h1>

                                        <Alert status={alert.status} message={alert.message} show={alert.show} />

                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-user"></i>
                                                    </span>

                                                </div>
                                                <Field placeholder="Enter Fullname" type="text" size="40" class="form-control username" name="fullname" />
                                            </div>
                                            <ErrorMessage name="fullname" component="small" className='text-danger' />
                                        </div>


                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                </div>
                                                <Field placeholder="Enter Username" type="text" size="30" class="form-control username" name="username" />
                                            </div>
                                            <ErrorMessage name="username" component="small" className='text-danger' />
                                        </div>

                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-key"></i>
                                                    </span>

                                                </div>
                                                <Field placeholder="Enter Password" type="password" class="form-control password" name='password' />
                                            </div>
                                            <ErrorMessage name="password" component="small" className='text-danger' />
                                        </div>

                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-key"></i>
                                                    </span>
                                                </div>
                                                <Field placeholder=" Retype Password" type="password" class="form-control password" name="passwordRepeat" />
                                            </div>
                                            <ErrorMessage name="passwordRepeat" component="small" className='text-danger' />
                                        </div>


                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-envelope"></i>
                                                    </span>

                                                </div>
                                                <Field placeholder="Enter Your Email" type="text" class="form-control envelope" name="email" />

                                            </div>
                                            <ErrorMessage name="email" component="small" className='text-danger' />
                                        </div>

                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-envelope"></i>
                                                    </span>
                                                </div>
                                                <Field placeholder="Phone Number" type="number" size='30' class="form-control envelope" name="phone" />
                                            </div>
                                            <ErrorMessage component="small" className='text-danger' name="phone" />
                                        </div>

                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-key"></i>
                                                    </span>
                                                </div>
                                                <Field placeholder="Secret Question" type="text" class="form-control password" name="secretQ" />
                                            </div>
                                            <ErrorMessage component="small" className='text-danger' name="secretQ" />
                                        </div>

                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-key"></i>
                                                    </span>
                                                </div>
                                                <Field placeholder="Secret Answer" type="text" class="form-control password" name="secretA" />
                                            </div>
                                            <ErrorMessage component="small" className='text-danger' name="secretA" />
                                        </div>

                                        <div class="form-group">
                                            <Field type="checkbox" name='agree' /> I agree with <a href="?a=rules">Terms and conditions</a>
                                            <button type="submit" class="btn btn-second btn-lg btn-block" disabled={isSubmitting}>{isSubmitting ? <i class="fas fa-spinner fa-spin"></i> : ''} Create New Account</button>
                                            <p style={{ textAlign: "center", margin: "15px 0 0", color: "rgba(0, 31, 93, 0.66)" }}>
                                            </p>
                                            <ErrorMessage component="small" className='text-danger' name="agree" />
                                        </div>

                                        <div className="text-center mt-2">
                                            <a href="/">Already have an Account</a>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default Signup;

