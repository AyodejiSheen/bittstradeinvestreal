import React, { useState } from 'react'
import '../css/style.css';
import '../css/auth.css';
import '../css/login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../img/logo.webp';
import axios from 'axios';
import { Baseurl } from '../baseurl';
import { useDispatch } from 'react-redux';
import { isLogged } from '../components/redux/actions';
import Alert from './alert';

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [alert, setAlert] = useState({ status: '', message: '', show: false })
    
    return (
        <>
            <div class="container-fluid login-body">
                <div class="auth">
                    <div class="head">
                        <div class="text-center">
                            <a href="/" >
                                <img src={logo} alt="Our Logo" />
                            </a>
                        </div>
                    </div>

                    <div class="main d-flex justify-content-center">
                        <div class="right order-1">
                            <h1 class="title mb-5">
                                <span class="icon">

                                    <i className="fa fa-user text-light"></i>

                                </span>
                                <span class="t">Access Account</span>
                            </h1>
                            <Formik
                                initialValues={{
                                    username: '',
                                    password: '',
                                }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.username) {
                                        errors.username = '*Username Required';
                                    }
                                    else if (!values.password) {
                                        errors.password = '*Password Required';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        history.push('/dashboard')
                                        // setSubmitting(true)
                                        // axios.post(`${Baseurl}auth/login`, values).then((res) => {
                                        //     if (res.data) {
                                        //         setSubmitting(false);
                                        //         let token = res.data.access_token
                                        //         sessionStorage.setItem('Token', token)
                                        //         dispatch(isLogged(true));
                                        //         history.push('/dashboard')
                                        //     }
                                        // }).catch((error) => {
                                        //     if (error.response.status === 401) {
                                        //         setSubmitting(false);
                                        //         setAlert(alert => ({
                                        //             ...alert,
                                        //             status: 'error',
                                        //             message: 'Login Details Incorrect',
                                        //             show: true
                                        //         }))
                                        //         setTimeout(() => {
                                        //             setAlert(alert => ({
                                        //                 ...alert,
                                        //                 show: false
                                        //             }))
                                        //         }, 2000)
                                        //     } else if (error.response.status === 500) {
                                        //         setSubmitting(false);
                                        //         sessionStorage.removeItem('Token')
                                        //         setAlert(alert => ({
                                        //             ...alert,
                                        //             status: 'error',
                                        //             message: 'Server is Down',
                                        //             show: true
                                        //         }))
                                        //         setTimeout(() => {
                                        //             setAlert(alert => ({
                                        //                 ...alert,
                                        //                 show: false
                                        //             }))
                                        //         }, 2000)
                                        //     }
                                        // })
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Alert status={alert.status} message={alert.message} show={alert.show} />
                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                    <span className="username">Username</span>
                                                </div>

                                                <Field
                                                    data-role="input-box2" name="username"
                                                    maxlength="30" placeholder="Enter Username"
                                                    type="text" class="form-control" />
                                            </div>
                                            <ErrorMessage name="username" component="small" className='text-danger' />
                                        </div>


                                        <div class="form-group">
                                            <div class="input-box2">
                                                <div class="label">
                                                    <span className="mr-3">
                                                        <i className="fa fa-key"></i>
                                                    </span>
                                                    <span className="password">Password</span>
                                                </div>
                                                <Field
                                                    data-role="input-box2"
                                                    name="password"
                                                    placeholder="Enter Password"
                                                    maxlength="30"
                                                    type="password"
                                                    class="form-control"
                                                />
                                            </div>
                                            <ErrorMessage name="password" component="small" className='text-danger' />
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-second btn-lg btn-block" disabled={isSubmitting}>{isSubmitting ? <i class="fas fa-spinner fa-spin"></i> : ''} Login</button>
                                        </div>

                                    </Form>

                                )}
                            </Formik>
                            <div class="mt-4">
                                <div class="forgot text-center">
                                    Forgot your password?
                                    <a href="?a=forgot_password">Recover it now</a>
                                </div>

                                <div className="text-center mt-2">
                                    <Link to='/signup'>Don't have an Account</Link>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
export default Login;
