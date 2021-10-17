import React, { Fragment } from 'react'
import { Navbar } from '../components/navbar'

export const Security = () => {
    return (
        <Fragment>
            <section class="main">
                <h1 class="page-title real-page-title">
                    <span>
                        <i className="fa fa-lock mr-5 fa-2x" style={{ color: "blueviolet" }}></i>
                    </span>
                    Two factor authentication
                </h1>


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

