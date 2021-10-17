import React from 'react';
import logo from "../img/logo.webp";
import advanced from "../img/advanced (1).jpg";
import affiliate from "../img/affiliate.webp";
import expert from "../img/expert.jpg";
import horns from "../img/horns.jpg";
import beginer from "../img/beginer.jpg";
import award01 from "../img/award01.webp";
import award02 from "../img/award02.webp";
import callback from "../img/callback.webp";
import fbIcon from "../img/fb-icon.jpg";
import mobileImg from "../img/mobile-img.webp";
import pro from "../img/pro.jpg";
import amatuer from "../img/amature.jpg";
import ctaImg from "../img/cta-img.webp";
import igIcon from "../img/ig-icon.jpg";
import tgIcon from "../img/tg-icon.jpg";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <section class=" pt-5 bg-white opaque text-center">
        <h3 class="upper">Join <b>bittstradeinvest</b>today</h3>
        <p>Experience the Bittstradeinvest- Sign Up Today!</p>
        <br />
        <Link to="/signup" class="gl-btn">Open Account</Link>
    </section>


    <section class="footer-c mt-5">
        <div class="mc px-5">
            <div class="c-25 text-white">
                <h3>bittstradeinvest.com</h3>
                <a href="/about" class="gl-link">About bittstradeinvest.com</a><br />
                <a href="/faq" class="gl-link">FAQs</a><br />
                <a href="/" class="gl-link">Request a Callback</a><br />
                <a href="/contact-us" class="gl-link">Contact Us</a>
            </div>
           
            
            <div class="c-25">
                <picture>
                    <source srcset={logo} type="image/webp"/>
                    <source srcset={logo} type="image/png"/>
                    <img data-src={logo} alt="LonghornFX" class="lazyload brandlog"/>
                </picture>
                <br></br>
                <a href="https://www.facebook.com/" alt="Facebook"><img src={fbIcon} class="lazyload"/></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/" alt="Instagram"><img src={igIcon} class="lazyload"/></a>&nbsp;&nbsp;
                <a href="https://t.me/" alt="Telegram"><img src={tgIcon} class="lazyload"/></a>
                <p>
                    © 2021 bittsmarket.com. All rights reserved.
                </p>
            </div>
        </div>

        <section class="sub-footer-c">
            <div class="mc px-5">
                <p className="d-none">
                    <b>bittsmarket.com</b>, First Floor, First St Vincent Bank Building, James Street, Kingstown, St. Vincent and the Grenadines<br /><br />
                  
                </p>
            </div>
        </section>

    </section>

        </>
    )
}
