import React from "react";
import affiliate from "../img/affiliate.webp";
import "../css/affiliate.css";

export const Affiliate = () => {
  return (
    <>
      <div className="bg-white">
        <section className="abt-section  px-5 nw-section">
          <div className="row mt-5">
            <div className="col-md-6">
              <h1 className="about-h1">Earn More with bittstradeinvest.com</h1>
              <p className="about-note">
                Put your referral link in good use by becoming a bittstradeinvest.com
                Affiliate.
              </p>
              <p className="about-note">
                Whether you’re the natural-born leader in your friendship
                circles or have a knack for influencing others through your
                referral link, we welcome you to maximise your earning potential
                through our referral programme.
              </p>

              <p className="about-note">
                We’ll provide you with all the referral link in your dashboard,
                you sharewe you friend , family and colleagues. The rest is up
                to you! The only question left to ask is ‘Why didn’t I join
                sooner?
              </p>

              <a href="/signup" class="gl-btn aff-join">
                JOIN THE REFERRAL PROGRAM
              </a>
              <p className="mt-3 ml-5">Affiliate Terms and Condition</p>
            </div>

            <div className="col-md-6">
              <img src={affiliate} className="img-fluid" />
            </div>
          </div>
          <hr className="mt-5"></hr>
        </section>

        <section className="px-5 nw-section">
          <div className="row">
            <h1 className="about-h1 text-center">How it Works</h1>

            <div className="col-md-3">
              <div class="c-25 b-hlt-c">
                <div class="icn new-account"></div>
                <div class="titl">
                  <span>SIGN UP</span>
                </div>
                <p className="work-note">
                  Sign up to the bittstradeinvest.com and receive your very own
                  unique referral link below your dashboard to get started.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25 b-hlt-c">
                <div class="icn cog"></div>
                <div class="titl">
                  <span>SPREAD THE WORD</span>
                </div>
                <p className="work-note">
                  Referral link can make use of the marketing materials supplied
                  by bittstradeinvest.com to support their online campaigns.
                  Creativity is key!
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div class=" c-25 b-hlt-c">
                <div class="icn earnings"></div>
                <div class="titl">
                  <span>INCREASE EARNINGS</span>
                </div>
                <p className="work-note">
                  For every deposit that comes through the affiliate’s unique
                  link, they will receive an added commission on their earnings,
                  paid out monthly or upon request.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25 b-hlt-c">
                <div class="icn support"></div>
                <div class="titl">
                  <span>GUIDANCE</span>
                </div>
                <p className="work-note">
                  We’re here to help referral grow. Improve your downline.
                  bittstradeinvest.com get in touch with your referral manager there
                  account at any time.
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 mb-5"></hr>
        </section>

        <section className="px-5 nw-section">
          <h2 className="offer">What we have to offer</h2>
          <div className="row">
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small life-commission"></div>
                  <p>Earn Lifelong Commission</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small manager"></div>
                  <p>One-to-One Affiliate Manager</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small no-fees"></div>
                  <p>No Sign-Up Fee</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small support247"></div>
                  <p>24/7 Customer Support</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small stats"></div>
                  <p>In-Depth Analytics</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small five-dollars"></div>
                  <p>Uncapped $3 + per Lot Traded</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small month-pay"></div>
                  <p>Monthly Payments, or Upon Request</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="c-25">
                <div class="s-hlt-c">
                  <div class="ml-2 icn small percent-up"></div>
                  <p>Boost your Earnings with Expert Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-5 nw-section">
          <div className="mt-5">
            <h2 className="offer">How Much Can Affiliates Earn?</h2>
            <p className="about-note">
              Affiliates make $5, $10, $15 per lot traded and there’s no limit
              to how many clients they can refer!
            </p>
          </div>
        </section>
        <hr className="m-0"></hr>


      </div>
    </>
  );
};