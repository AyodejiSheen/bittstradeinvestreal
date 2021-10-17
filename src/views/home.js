import React, { Fragment} from 'react';
import '../css/dashboard.css'
import '../css/dashnav.css'



const Home = ({profile}) => {


    return (
        <Fragment>
            <section class="main">
                <div class="card card-body account-balance" style={{ width: '100%' }}>
                    <div class="row bw-flex-center">
                        <div class="col-xl-4 col-lg-4 col-md-4 mb-1 mt-1">
                            <div class="total-box ">
                                <div class="title">Total Balance</div>
                                <div class="total-price">{profile.balance} <span>USD</span></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 mb-1 mt-1">
                            <div class="total-box ">
                                <div class="title">Total Earning</div>
                                <div class="total-price">{profile.earnings} <span>USD</span></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 mb-1 mt-1">
                            <div class="total-box last-access b-none">
                                <div class="title">Last Access</div>
                                <div class="total-price">{profile.updated_at}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="card" id="liveprice">
                    <div class="row justify-content-center ">
                    </div>
                </section>


                <div class="row bw-flex-center">
                    <div class="col-xl-6 col-lg-6 col-sm-6 panel-stats-card">
                        <div class="card  dark yellow">
                            <div class="header">
                                <div class="icon div-icon">
                                    <div>
                                        <i className="fa fa-wallet text-warning fa-2x title-icon"></i>
                                    </div>
                                </div>

                                <h3 class="title title-edit">Investment <span>Status</span> </h3>
                            </div>
                            <div class="amount">
                                <div class="row">
                                    <div class="col col-md-6">
                                        <div class="title mt-0">Active Investment:</div>
                                    </div>
                                    <div class="col col-md-6">
                                        <div class="price">0.00 <span>USD</span></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="mt-1">
                                    <div class="row">
                                        <div class="col col-md-6 mb-3">
                                            <div class="titr">Total:</div><br></br>
                                            <div class="in-amount">0.00 <span>USD</span></div>
                                        </div>
                                        <div class="col col-md-6 mb-3 text-right">
                                            <div class="titr">Latest:</div><br></br>
                                            <div class="in-amount"> n/a<span> USD</span></div>
                                            <div class="date">-</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-sm-6 panel-stats-card">
                        <div class="card  dark">
                            <div class="header">
                                <div class="icon div-icon">
                                    <div>
                                        <i className="fa fa-download fa-2x text-white title-icon"></i>
                                    </div>
                                </div>

                                <h3 class="title title-edit">withdrawal <span>Status</span> </h3>
                            </div>
                            <div class="amount">
                                <div class="row">
                                    <div class="col col-md-6">
                                        <div class="title mt-0">Total Withdrawal:</div>
                                    </div>
                                    <div class="col col-md-6">
                                        <div class="price">0.00 <span>USD</span></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="mt-1">
                                    <div class="row">
                                        <div class="col col-md-6 mb-3">
                                            <div class="titr">Pending:</div><br></br>
                                            <div class="in-amount">0.00 <span>USD</span></div>
                                        </div>
                                        <div class="col col-md-6 mb-3 text-right">
                                            <div class="titr">Latest:</div><br></br>
                                            <div class="in-amount"> n/a <span>USD</span></div>
                                            <div class="date">-</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="card card-body card-ads">
                    <div class="row bw-flex-center">
                        <div class=" col-md-8">
                            <h3 class="title">Make an investment and watch as it grows</h3>
                            <p>No trading skills are required. Our experienced traders manage your funds.</p>
                        </div>
                        <div class=" col-md-4">
                            <a href="?a=deposit" class="btn-bw float-right make-invest-btn">Invest Now</a>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </section>


                <section class="card card-body marketing-banners">
                    <div class="row justify-content-between bw-flex-center">
                        <div class="col-md-8 col-sm-8">
                            <div class="title-icon">
                                <div class="text">
                                    Make your referral network
                                    <div class="text-clp">Refer us to your friends and earn up to 10% on all of the investments they make!</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 d-sm-block text-center">
                            <a href="?a=referals" class="btn btn-outline-warning btn-banners float-sm-right">Manage Your Referrals</a>
                            <div class="clearfix"></div>
                        </div>
                    </div>

                    <div class="mt-5 referral-link">
                        <div class="row">
                            <div class="col-md-10">
                                <div class="link">
                                    Personal referral link : <span id="ref-links">http://bittsmarket.com//?ref=dd</span>
                                    <button data-clipboard-target="#ref-links" style={{ cursor: 'pointer' }} class="copy">Copy Link</button>
                                </div>
                            </div>

                        </div>
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
        </Fragment>
    )
}

export default Home
