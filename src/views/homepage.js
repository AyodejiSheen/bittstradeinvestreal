import React from "react";
import "../css/homepage.css";
import logo from '../img/logo.webp';
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
import { Link } from "react-router-dom";


export const Homepage = () => {
  return (
    <>
   
      <div className="bg-white">
        <section className=" nw-section px-5">
          <div className="col-md-6 pt-5">
            <div className="cta-c ">
              <h1>Welcome to Bittstradeinvest</h1>
              <h2 className="sect-note">
                Secure and Enjoy stable profits daily or weekly, you will get a
                high and enjoyable income just by sitting at home
              </h2>

              <picture>
                <source srcset={ctaImg} type="image/webp" />
                <source srcset={ctaImg} type="image/png" />
                <img data-src={ctaImg} alt="BITTSTRADEINVEST" class="lazyload" />
              </picture>
            </div>
          </div>
        </section>

        <marquee className="marquee py-4">ETH BTC BNB</marquee>

        <section className="white nw-section mt-5  px-5">

            <h2>OUR BEST PRICING</h2>
            <p className="font-weight-bold clh">
              We have different investment plan that you can benefit from,
              choose one, make payment to get started
            </p>

            <div className="row">
              <div className="col-md-6">
                    <img src={beginer} alt="" className="img-mob"></img>
                </div>
 

              <div className="col-md-6">
                  <img src={amatuer} alt="" className="img-mob"></img>
              </div>

              <div className="col-md-6">
                <img src={advanced} alt="" className="img-mob"></img>
              </div>

              <div className="col-md-6">
                <img src={pro} alt="" className="img-mob"></img>
              </div>

              <div className="col-md-6">
                <img src={expert} alt="" className="img-mob"></img>
              </div>

              <div className="col-md-6 mt-4">
                <h1 className="expr">Experience Trading with a Difference</h1>
                <p style={{ fontSize: "18px" }}>
                  Bittstradeinvest is an automated bitcoin professional trader,With
                  stable profits daily or weekly, you will get a high and
                  enjoyable income just by sitting in your home Our services are
                  based on transparency, innovation and efficiency, ensuring an
                  unparalleled trading experience for all.
                </p>
              </div>

            </div>
        </section>


    <section className=" nw-section px-5">
      <div className="row">
        <div className="col-md-6">
          <div class="b-hlt-c">
                <div class="icn shield"></div>
                <div class="title">Trade on a Trusted Platform</div>
                <p >Your investment and our Trading software is secure with a three way system</p>
            </div>
        </div>

        <div className="col-md-6">
        <div class="b-hlt-c">
                <div class="icn money-check"></div>
                <div class="title">Mobile Apps</div>
                <p>Our system is mobile friendly, it rearranges to fit your mobile screen for a smooth navigation</p>
            </div>
        </div>


        <div className="col-md-6">
        <div class="b-hlt-c">
                <div class="icn low-spreads"></div>
                <div class="title">Bitcoin Pump</div>
                <p>Benefit from high spreads on all tradable assets thanks to our access to top liquidity providers</p>
            </div>
        </div>

        <div className="col-md-6">
        <div class="b-hlt-c">
                <div class="icn low-commission"></div>
                <div class="title">Referral Program</div>
                <p>Bittstradeinvest offers a lucrative referral-based compensation opportunity for those who are interested in building an additional stream of income by introducing new clients to our platform! Participation in our referral compensation program is 100% optional.</p>
            </div>
        </div>

        <div className="col-md-6">
        <div class="b-hlt-c">
                <div class="icn support247"></div>
                <div class="title">24/7 Support</div>
                <p>Our customer service team is ready to help you with any queries you encounter, via live chat, email or phone call</p>
            </div>
        </div>

        <div className="col-md-6">
        <div class="b-hlt-c">
                <div class="icn demo"></div>
                <div class="title">Instant Payment</div>
                <p>You will get your earn, also you will get Instant Payment</p>
            </div>
        </div>
      </div>
    </section>

    <section className="p-5 ml-3 mt-5">
      <div className="row">
        <div className="col-md-6">
                <h3 className="trade-head">Trade Anywhere, Anytime With Bittstradeinvest</h3>
                <p className="trade-note">
                    Whether you’re at home or on-the-go, access your Bittstradeinvest account with ease. Our  platform is available on PC, iOS, Android all are Web View, so you can check your trades account  wherever you are.  All you need is an internet connection and a device to trade on, and you’re all set!
                </p>
                <Link to="/signup" class="gl-btn">Join Us Today</Link>
         
        </div>

        <div className="col-md-6">
 
                <picture>
                    <source srcset={mobileImg} type="image/webp"/>
                    <source srcset={mobileImg} type="image/jpg"/>
                    <img data-src={mobileImg} alt="" class="lazyload img-mob"/>
                </picture>

        </div>
      </div>
    </section>


    <section className="award text-center p-5">
      <img src={award01}/>
      <img src={award02}/>
    </section>

    <marquee className="py-5">ETH BTC BNB</marquee>


    


      </div>
    </>
  );
};