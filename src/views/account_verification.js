import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo from '../img/logo.webp';
import axios from 'axios';
import { Baseurl } from '../baseurl';
import Alert from './alert';
import { useHistory, useParams } from 'react-router';


const AccountVerification = () => {
    const {email} = useParams();
    const history = useHistory();
    const [alert, setAlert] = useState({status: '', message: '', show:false})
    const [showResendloader, setResendloader] = useState(false)

    const resendCode = () => {
        setResendloader(true)
        axios.post(`${Baseurl}resendcode`, { email: email }).then((res) => {
            setResendloader(false)
            if (res.data.sent) {
                setAlert(alert => ({
                    ...alert,
                    status: 'success',
                    message: 'Code Sent, Check your email',
                    show:true
                })) 
               setTimeout(()=>{
                setAlert(alert =>({
                    ...alert,
                    show:false
                }))
               }, 2000)
            } else if (res.data.error) {
                setAlert(alert => ({
                    ...alert,
                    status: 'error',
                    message: 'Something is wrong',
                    show:true
                })) 
               setTimeout(()=>{
                setAlert(alert =>({
                    ...alert,
                    show:false
                }))
               }, 2000)
            }
        })
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
                            <span class="t">Verify Account</span>
                        </h1>
                        <Formik
                            initialValues={{
                                code: '',
                                email:email
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.code) {
                                    errors.code = '*Code Required';
                                }
                               
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(true)            
                                    axios.post(`${Baseurl}verifycode`, values).then((res) => {
                                        setSubmitting(false);
                                        if (res.data === 'Already Verified') {
                                            setAlert(alert => ({
                                                ...alert,
                                                status: 'error',
                                                message: 'Already Verified',
                                                show:true
                                            })) 
                                           setTimeout(()=>{
                                            setAlert(alert =>({
                                                ...alert,
                                                show:false
                                            }))
                                           }, 2000)
                                            setTimeout(() => history.push('/login'), 2000)

                                        } else if (res.data === 'Invalid or Expired Code') {
                                            setAlert(alert => ({
                                                ...alert,
                                                status: 'error',
                                                message: 'Invalid or Expired Code',
                                                show:true
                                            })) 
                                           setTimeout(()=>{
                                            setAlert(alert =>({
                                                ...alert,
                                                show:false
                                            }))
                                           }, 2000)
                                        } else if (res.data === 'Verified') {
                                            setAlert(alert => ({
                                                ...alert,
                                                status: 'success',
                                                message: 'Succesfully verified',
                                                show:true
                                            })) 
                                           setTimeout(()=>{
                                            setAlert(alert =>({
                                                ...alert,
                                                show:false
                                            }))
                                           }, 2000)
                                            setTimeout(() => history.push('/login'), 2000)

                                        } else if (res.data === 'User not Found') {
                                            setAlert(alert => ({
                                                ...alert,
                                                status: 'error',
                                                message: 'User not Found',
                                                show:true
                                            })) 
                                           setTimeout(()=>{
                                            setAlert(alert =>({
                                                ...alert,
                                                show:false
                                            }))
                                           }, 2000)
                                        }
                                    })
                                    // history.push('/dashboard')
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                    <Form>
                      <Alert status={alert.status} message={alert.message} show={alert.show}/>
                                    <div class="form-group">
                                        <div class="input-box2">
                                            <div class="label">
                                                <span className="mr-3">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <span className="username">Code</span>
                                            </div>

                                            <Field
                                                data-role="input-box2" name="code"
                                                maxlength="30" placeholder="Enter Code"
                                                type="number" class="form-control" />
                                        </div>
                                        <ErrorMessage name="code" component="small" className='text-danger' />
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-second btn-lg btn-block" disabled={isSubmitting}>{isSubmitting?<i class="fas fa-spinner fa-spin"></i>:''} Verify</button>
                                    </div>
                                    <div className="text-center mt-2" onClick={resendCode}>
                                        <p style={{cursor:'pointer'}}>{showResendloader ? <i class="fas fa-spinner fa-spin"></i> : ''} Resend Code</p>
                                    </div>
                                </Form>

                            )}
                        </Formik>
                 
                    </div>
  
                </div>
            </div>

        </div>
    </>
    )
}

export default AccountVerification
