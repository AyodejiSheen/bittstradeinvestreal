import axios from 'axios';
import React, { Fragment, useRef, useState } from 'react'
import { Baseurl } from '../baseurl';
import Alert from './alert';
import { useHistory } from 'react-router';


export const Deposit = ({ profile }) => {
    const history = useHistory();
    const five = useRef();
    const ten = useRef();
    const fifteen = useRef();
    const tweentyfive = useRef();
    const forty = useRef();
    const amount = useRef();
    let plan = ''
    const [alert, setAlert] = useState({ status: '', message: '', show: false })
    const [isSubmitting, setSubmitting] = useState(false)


    const deposit = (e) => {
        e.preventDefault();
        if (five.current.checked === true) {
            plan = 5;
        } else if (ten.current.checked === true) {
            plan = 10;
        } else if (fifteen.current.checked === true) {
            plan = 15;
        } else if (tweentyfive.current.checked === true) {
            plan = 25;
        } else if (forty.current.checked === true) {
            plan = 40;
        }
        setSubmitting(true)
        if (profile.balance < 500) {
            //    Fund
            if (plan) {
                let token = sessionStorage.Token
                axios.post(`${Baseurl}deposit`, { token: token, plan: plan }).then((res) => {
                    setSubmitting(false)
                    if (res.data === 'sent') {
                        setAlert(alert => ({
                            ...alert,
                            status: 'success',
                            message: 'Please check email for payment instructions',
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
            } else {
                setSubmitting(false)
                setAlert(alert => ({
                    ...alert,
                    status: 'error',
                    message: 'Please choose a plan',
                    show: true
                }))
                setTimeout(() => {
                    setAlert(alert => ({
                        ...alert,
                        show: false
                    }))
                }, 2000)

            }
        } else {
            // Invest
            if (plan === 5) {
                let token = sessionStorage.Token
                if (amount.current.value >= 500 && amount.current.value <= 1000) {
                    axios.post(`${Baseurl}invest`, { token: token, plan: plan, amount: amount.current.value }).then((res) => {
                        setSubmitting(false)
                        console.log(res.data)
                        if (res.data === 'success') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'success',
                                message: 'Success: Thanks for Investing with us!',
                                show: true
                            }))
                            setTimeout(() => {
                                setAlert(alert => ({
                                    ...alert,
                                    show: false
                                }))
                            }, 2000)
                            setTimeout(() => history.push('/dashboard/fund-management'), 2000)
                        } else if (res.data === 'insuffcient') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'error',
                                message: 'Insufficient Fund!',
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
                } else {
                    setSubmitting(false)
                    setAlert(alert => ({
                        ...alert,
                        status: 'error',
                        message: 'Minimum Investment for this plan is $500 and Maximum Investment for this plan is $1000',
                        show: true
                    }))
                    setTimeout(() => {
                        setAlert(alert => ({
                            ...alert,
                            show: false
                        }))
                    }, 4000)
                }

            } else if (plan === 10) {
                if (amount.current.value >= 1000 && amount.current.value <= 5000) {
                    let token = sessionStorage.Token
                    axios.post(`${Baseurl}invest`, { token: token, plan: plan, amount: amount.current.value }).then((res) => {
                        setSubmitting(false)
                        console.log(res.data)
                        if (res.data === 'success') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'success',
                                message: 'Success: Thanks for Investing with us!',
                                show: true
                            }))
                            setTimeout(() => {
                                setAlert(alert => ({
                                    ...alert,
                                    show: false
                                }))
                            }, 2000)
                            setTimeout(() => history.push('/dashboard/fund-management'), 2000)
                        } else if (res.data === 'insuffcient') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'error',
                                message: 'Insufficient Fund!',
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
                } else {
                    setSubmitting(false)
                    setAlert(alert => ({
                        ...alert,
                        status: 'error',
                        message: 'Minimum Investment for this plan is $1000 and Maximum Investment for this plan is $5000',
                        show: true
                    }))
                    setTimeout(() => {
                        setAlert(alert => ({
                            ...alert,
                            show: false
                        }))
                    }, 4000)
                }
            } else if (plan === 15) {
                if (amount.current.value >= 5000 && amount.current.value <= 10000) {
                    let token = sessionStorage.Token
                    axios.post(`${Baseurl}invest`, { token: token, plan: plan, amount: amount.current.value }).then((res) => {
                        setSubmitting(false)
                        console.log(res.data)
                        if (res.data === 'success') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'success',
                                message: 'Success: Thanks for Investing with us!',
                                show: true
                            }))
                            setTimeout(() => {
                                setAlert(alert => ({
                                    ...alert,
                                    show: false
                                }))
                            }, 2000)
                            setTimeout(() => history.push('/dashboard/fund-management'), 2000)
                        } else if (res.data === 'insuffcient') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'error',
                                message: 'Insufficient Fund!',
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
                } else {
                    setSubmitting(false)
                    setAlert(alert => ({
                        ...alert,
                        status: 'error',
                        message: 'Minimum Investment for this plan is $5000 and Maximum Investment for this plan is $10000',
                        show: true
                    }))
                    setTimeout(() => {
                        setAlert(alert => ({
                            ...alert,
                            show: false
                        }))
                    }, 4000)
                }
            } else if (plan === 25) {
                if (amount.current.value >= 10000 && amount.current.value <= 100000) {
                    let token = sessionStorage.Token
                    axios.post(`${Baseurl}invest`, { token: token, plan: plan, amount: amount.current.value }).then((res) => {
                        setSubmitting(false)
                        console.log(res.data)
                        if (res.data === 'success') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'success',
                                message: 'Success: Thanks for Investing with us!',
                                show: true
                            }))
                            setTimeout(() => {
                                setAlert(alert => ({
                                    ...alert,
                                    show: false
                                }))
                            }, 2000)
                            setTimeout(() => history.push('/dashboard/fund-management'), 2000)
                        } else if (res.data === 'insuffcient') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'error',
                                message: 'Insufficient Fund!',
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
                } else {
                    setSubmitting(false)
                    setAlert(alert => ({
                        ...alert,
                        status: 'error',
                        message: 'Minimum Investment for this plan is $10000 and Maximum Investment for this plan is $100000',
                        show: true
                    }))
                    setTimeout(() => {
                        setAlert(alert => ({
                            ...alert,
                            show: false
                        }))
                    }, 4000)
                }
            } else if (plan === 40) {
                if (amount.current.value >= 100000 && amount.current.value <= 500000) {
                    let token = sessionStorage.Token
                    axios.post(`${Baseurl}invest`, { token: token, plan: plan, amount: amount.current.value }).then((res) => {
                        setSubmitting(false)
                        console.log(res.data)
                        if (res.data === 'success') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'success',
                                message: 'Success: Thanks for Investing with us!',
                                show: true
                            }))
                            setTimeout(() => {
                                setAlert(alert => ({
                                    ...alert,
                                    show: false
                                }))
                            }, 2000)
                            setTimeout(() => history.push('/dashboard/fund-management'), 2000)
                        } else if (res.data === 'insuffcient') {
                            setAlert(alert => ({
                                ...alert,
                                status: 'error',
                                message: 'Insufficient Fund!',
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
                } else {
                    setSubmitting(false)
                    setAlert(alert => ({
                        ...alert,
                        status: 'error',
                        message: 'Minimum Investment for this plan is $100000 and Maximum Investment for this plan is $500000',
                        show: true
                    }))
                    setTimeout(() => {
                        setAlert(alert => ({
                            ...alert,
                            show: false
                        }))
                    }, 4000)
                }
            } else {
                setSubmitting(false)
                setAlert(alert => ({
                    ...alert,
                    status: 'error',
                    message: 'Please Select a plan',
                    show: true
                }))
                setTimeout(() => {
                    setAlert(alert => ({
                        ...alert,
                        show: false
                    }))
                }, 2000)
            }

        }

    }
    return (
        <Fragment>
            <section class="main">
                <h1 class="page-title real-page-title">
                    <span>
                        <i className="fa fa-wallet mr-5 fa-2x" style={{ color: "blueviolet" }}></i>
                    </span>
                    <span>Make a new</span> Investment
                </h1>

                <section id="bw-transaction">

                    <form onSubmit={deposit}>
                        <br></br>

                        <div class="table-responsive">
                            <table class="table bw-table">
                                <tr>
                                    <td colspan="3">
                                        <input type="checkbox" ref={five} />

                                        <b>5% ROI in 24Hour</b></td>
                                </tr><tr>
                                    <td class="inheader">Plan</td>
                                    <td class="inheader" style={{ width: "200px" }}>Spent Amount ($)</td>
                                    <td class="inheader" style={{ width: "100px" }} nowrap><nobr> Profit (%)</nobr></td>
                                </tr>
                                <tr>
                                    <td class="item">Plan 1</td>
                                    <td class="item ">$500.00 - $1000.00</td>
                                    <td class="item ">5.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3"><a href="#">Calculate your profit &gt;&gt;</a></td>
                                </tr>
                            </table><br></br>

                        </div>


                        <div class="table-responsive">
                            <table class="table bw-table">
                                <tr>
                                    <td colspan="3">
                                        <input type="checkbox" ref={ten} />

                                        <b>10% ROI IN 72HOURS</b></td>
                                </tr><tr>
                                    <td class="inheader">Plan</td>
                                    <td class="inheader" style={{ width: "200px" }}>Spent Amount ($)</td>
                                    <td class="inheader" style={{ width: "100px" }} nowrap><nobr> Profit (%)</nobr></td>
                                </tr>
                                <tr>
                                    <td class="item">Plan 2</td>
                                    <td class="item">$1000.00 - $5000.00</td>
                                    <td class="item">30.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3"><a href="#">Calculate your profit &gt;&gt;</a></td>
                                </tr>
                            </table><br></br>

                        </div>

                        <div class="table-responsive">
                            <table class="table bw-table">
                                <tr>
                                    <td colspan="3">
                                        <input type="checkbox" ref={fifteen} />
                                        <b>15% ROI IN 5 DAYS</b></td>
                                </tr><tr>
                                    <td class="inheader">Plan</td>
                                    <td class="inheader" style={{ width: "200px" }}>Spent Amount ($)</td>
                                    <td class="inheader" style={{ width: "100px" }} nowrap><nobr> Profit (%)</nobr></td>
                                </tr>
                                <tr>
                                    <td class="item">Plan 3</td>
                                    <td class="item">$5000.00 - $10000.00</td>
                                    <td class="item">15.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3" ><a href="#">Calculate your profit &gt;&gt;</a></td>
                                </tr>
                            </table><br></br>

                        </div>

                        <div class="table-responsive">
                            <table class="table bw-table">
                                <tr>
                                    <td colspan="3">
                                        <input type="checkbox" ref={tweentyfive} />

                                        <b>25% IN 10 DAYS</b></td>
                                </tr><tr>
                                    <td class="inheader">Plan</td>
                                    <td class="inheader" style={{ width: "200px" }}>Spent Amount ($)</td>
                                    <td class="inheader" style={{ width: "100px" }} nowrap><nobr> Profit (%)</nobr></td>
                                </tr>
                                <tr>
                                    <td class="item">Plan 4</td>
                                    <td class="item">$10000.00 - $100000.00</td>
                                    <td class="item">25.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3"><a href="#">Calculate your profit &gt;&gt;</a></td>
                                </tr>
                            </table><br></br>

                        </div>

                        <div class="table-responsive">
                            <table class="table bw-table">
                                <tr>
                                    <td colspan="3">
                                        <input type="checkbox" ref={forty} />
                                        <b>40% ROI IN 15 DAYS</b></td>
                                </tr><tr>
                                    <td class="inheader" >Plan</td>
                                    <td class="inheader" style={{ width: "200px" }}>Spent Amount ($)</td>
                                    <td class="inheader" style={{ width: "100px" }} nowrap><nobr> Profit (%)</nobr></td>
                                </tr>
                                <tr>
                                    <td class="item">Plan 5</td>
                                    <td class="item">$100000.00 - $500000.00</td>
                                    <td class="item">40.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3"><a href="#">Calculate your profit &gt;&gt;</a></td>
                                </tr>
                            </table><br></br>



                            <table cellspacing="0" cellpadding="2" border="0">


                                {profile.balance < 500 ? <>
                                    <tr>
                                        <td className='text-danger'>Your Balance is low (You need at least 500$ to buy a plan)</td>
                                    </tr>



                                </> : <>
                                    <tr>
                                        <td>Your account balance: <strong>${profile.balance}</strong></td>

                                    </tr>
                                    <tr>
                                        <td class="text-left">
                                            How much you want to invest: <input type='number' ref={amount} />
                                        </td>
                                    </tr></>}
                                <Alert status={alert.status} message={alert.message} show={alert.show} />
                                {profile.balance < 500 ?
                                    <tr>
                                        <td colspan="2"><button type="submit" class="btn btn-lg btn-p-h btn-bw" disabled={isSubmitting}>{isSubmitting ? <i class="fas fa-spinner fa-spin"></i> : ''} Fund Wallet</button></td>
                                    </tr> : <tr>
                                        <td colspan="2"><button type="submit" class="btn btn-lg btn-p-h btn-bw" disabled={isSubmitting}>{isSubmitting ? <i class="fas fa-spinner fa-spin"></i> : ''} Invest </button></td>
                                    </tr>}
                            </table>

                        </div>

                    </form>



                </section>
                <div class="panel-footer">
                    <nav class="float-right menu d-none d-md-block">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Managed Investment</a></li>
                            <li><a href="#">Referral Program</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </nav>

                    <ul class="socials float-left">

                    </ul>

                    <div class="clearfix"></div>

                </div>
            </section>
        </Fragment>
    )
}

