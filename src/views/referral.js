import React, { Fragment } from 'react'


export const Referral = () => {
    return (
        <Fragment>
            <section class="main">

                <h1 class="page-title real-page-title">
                    <span>
                        <i className="fa fa-user-plus mr-5 fa-2x" style={{ color: "blueviolet" }}></i>
                    </span>
                    <span>Manage your Referral Network</span>
                </h1>

                <section id="bw-referrals">

                    <div class="mt-1 referral-link">
                        <div class="row">
                            <div class="col-md-8" >
                                <div class="link">
                                    Personal Referral link : <span id="ref-links">http://bittsmarket.com//?ref=dd</span>
                                    <button data-clipboard-target="#ref-links" style={{ cursor: "pointer" }} class="copy btn">Copy Link</button>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="float-md-right text-center">
                                    <a class="m-banner-link btn btn-bw" href="#">Marketing Banners</a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div class="balance d-flex justify-content-between mt-3">
                        <div class="b-c b-c-r float-left">
                            Total Referrals  <b>0</b>
                        </div>
                        <div class="b-c  b-c-r">
                            Active Referrals  <b>0</b>
                        </div>
                        <div class="b-c">
                            Commission Earned  <b>0.00</b> <span>USD</span>
                        </div>
                    </div>

                    <br></br>


                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
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

