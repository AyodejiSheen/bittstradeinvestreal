import React, { Fragment } from 'react'
import btcimg from '../img/1000.gif';

export const Withdraw = () => {
    return (
        <Fragment>
            <section class="main">

                <div class="card card-body account-balance" style={{ width: "100%" }}>
                    <div class="row bw-flex-center">
                        <div class="col-xl-6 col-lg-6 col-md-6 mb-1 mt-1">
                            <div class="total-box ">
                                <div class="title">Pending Withdrawal</div>
                                <div class="total-price">0.00<span>USD</span></div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 mb-1 mt-1">
                            <div class="total-box ">
                                <div class="title">Total Balance</div>
                                <div class="total-price">0.00 <span>USD</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 class="page-title real-page-title">
                    <span>
                        <i className="fa fa-download mr-5 fa-2x" style={{ color: "blueviolet" }}></i>
                    </span>
                    Withdraw Funds
                </h1>

                <section id="bw-transaction">


                    <section id="withdraw-request" >
                        <div class="card dark">
                            <form class="card-body p-5 pt-0">



                                <div class="table-responsive">
                                    <table class="table bw-table">
                                        <tr>
                                            <th></th>
                                            <th>Processing</th>
                                            <th>Available</th>
                                            <th>Pending</th>
                                            <th>Account</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td><img src={btcimg} style={{ width: "44", height: "17", textAlign: "absmiddle" }} /> BITCOIN</td>
                                            <td><b style={{ color: "green" }}>$0.00</b></td>
                                            <td><b style={{ color: "red" }}>$0.00</b></td>
                                            <td><a href="#"><i>not set</i></a></td>
                                        </tr>
                                    </table>
                                </div>

                                <br></br>
                                You have no funds to withdraw.
                            </form>
                        </div>

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
            </section>


        </Fragment>
    )
}

