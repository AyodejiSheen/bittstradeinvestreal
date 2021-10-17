import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Baseurl } from '../baseurl';


export const Fund = () => {
    const [funds, setFunds] = useState([])
    useEffect(() => {
        let token = sessionStorage.Token
        axios.get(`${Baseurl}funds`, {
            params: {
                token: token
            }
        }).then((res) => {
            if (res.data) {
                setFunds(res.data)
            }
        })
    }, [])
    return (

        <Fragment>
            <section class="main">

                <h1 class="page-title real-page-title">
                    <span>
                        <i className="fa fa-wallet mr-5 fa-2x" style={{ color: "blueviolet" }}></i>
                    </span>
                    <span>Funds</span> Management
                </h1>

                <section id="bw-deposit">
                    <div class="mt-4">
                        <div class="row bw-flex-center">

                            <b>Total: $0.00</b><br></br>

                            <div class="table-responsive">
                                <table class="table bw-table">
                                    <tr><td class="item">
                                        <td colspan="3" className="text-center border-0"><b>5% ROI in 24Hour</b></td>
                                        <br></br>
                                        {funds.length ? funds.filter((item, index) => item.plan === 5).map((item, index) => {
                                            return (
                                                <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                                    <div class="col-sm-12 ">
                                                        <div class="card card-body">
                                                            {index + 1}. <small><strong>Amount Invested: ${item.amount}</strong></small>
                                                        </div>
                                                    </div>
                                                </table>
                                            )
                                        }) : <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                            <div class="col-sm-12 ">
                                                <div class="card card-body text-center">
                                                    You have no active investment.
                                                </div>
                                            </div>
                                        </table>}

                                        <br></br>
                                    </td></tr></table>
                            </div>
                            <br></br>

                            <div class="table-responsive">
                                <table class="table bw-table">
                                    <tr><td class="item">
                                        <td colspan="3" className="text-center border-0"><b>10% ROI IN 72HOURS</b></td>
                                        <br></br>
                                        {funds.length ? funds.filter((item, index) => item.plan === 10).map((item, index) => {
                                            return (
                                                <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                                    <div class="col-sm-12 ">
                                                        <div class="card card-body">
                                                            {index + 1}. <small><strong>Amount Invested: ${item.amount}</strong></small>
                                                        </div>
                                                    </div>
                                                </table>
                                            )
                                        }) : <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                            <div class="col-sm-12 ">
                                                <div class="card card-body text-center">
                                                    You have no active investment.
                                                </div>
                                            </div>
                                        </table>}
                                        <br></br>
                                    </td></tr></table>
                            </div>
                            <br></br>

                            <div class="table-responsive">
                                <table class="table bw-table">
                                    <tr><td class="item">
                                        <td colspan="3" className="text-center border-0"><b>15% ROI IN 5 DAYS</b></td>
                                        <br></br>
                                        {funds.length ? funds.filter((item, index) => item.plan === 15).map((item, index) => {
                                            return (
                                                <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                                    <div class="col-sm-12 ">
                                                        <div class="card card-body">
                                                            {index + 1}. <small><strong>Amount Invested: ${item.amount}</strong></small>
                                                        </div>
                                                    </div>
                                                </table>
                                            )
                                        }) : <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                            <div class="col-sm-12 ">
                                                <div class="card card-body text-center">
                                                    You have no active investment.
                                                </div>
                                            </div>
                                        </table>}
                                        <br></br>
                                    </td></tr></table>
                            </div>
                            <br></br>

                            <div class="table-responsive">
                                <table class="table bw-table">
                                    <tr><td class="item">
                                        <td colspan="3" className="text-center border-0"><b>25% IN 10 DAYS</b></td>
                                        <br></br>
                                        {funds.length ? funds.filter((item, index) => item.plan === 25).map((item, index) => {
                                            return (
                                                <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                                    <div class="col-sm-12 ">
                                                        <div class="card card-body">
                                                            {index + 1}. <small><strong>Amount Invested: ${item.amount}</strong></small>
                                                        </div>
                                                    </div>
                                                </table>
                                            )
                                        }) : <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                            <div class="col-sm-12 ">
                                                <div class="card card-body text-center">
                                                    You have no active investment.
                                                </div>
                                            </div>
                                        </table>}
                                        <br></br>
                                    </td></tr></table>
                            </div>
                            <br></br>

                            <div class="table-responsive">
                                <table class="table bw-table">
                                    <tr><td class="item">
                                        <td colspan="3" className="text-center border-0"><b>40% ROI IN 15 DAYS</b></td>
                                        <br></br>
                                        {funds.length ? funds.filter((item, index) => item.plan === 40).map((item, index) => {
                                            return (
                                                <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                                    <div class="col-sm-12 ">
                                                        <div class="card card-body">
                                                            {index + 1}. <small><strong>Amount Invested: ${item.amount}</strong></small>
                                                        </div>
                                                    </div>
                                                </table>
                                            )
                                        }) : <table cellspacing="1" cellpadding="2" border="0" style={{ width: '100%' }}>
                                            <div class="col-sm-12 ">
                                                <div class="card card-body text-center">
                                                    You have no active investment.
                                                </div>
                                            </div>
                                        </table>}
                                        <br></br>
                                    </td></tr></table>
                            </div>
                            <br></br>

                        </div></div>
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


