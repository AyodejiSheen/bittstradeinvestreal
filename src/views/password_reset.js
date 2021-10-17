import React, {useState} from 'react'
import '../css/style.css';
import '../css/auth.css';
import '../css/login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../img/logo.webp';

const PasswordReset = () => {
const history = useHistory();


    const OnLog = (e) => {
        e.preventDefault();
        history.push(`/loading`);

        setTimeout(() => {
            history.push(`/dashboard`)
        }, 3000)

    }


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
                                        setSubmitting(true)
                                        console.log(values)
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>

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
                                            <button type="submit" class="btn btn-second btn-lg btn-block" disabled={isSubmitting}>Login</button>
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
export default PasswordReset;
