import React from "react";
import callback from "../img/callback.webp";

import '../css/contact.css';

export const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <section className="abt-section  px-5 nw-section">
          <div className="row mt-5">
            <div className="col-md-6">
                            <h1 className="about-h1">Prefer to speak to a human over the phone?</h1>

                    <h3>Our call back service is available 24/7 in your timezone!</h3>
                    <p className="about-note">
                        Fill out the form and one of our dedicated agents will get in contact with you at your preferred time.
                        <br /><br />
                        At bittstradeinvest.com, we take the role of customer support very seriously and pride ourselves in ensuring that each and every individual who trades with us receives the very highest level of care!
                    </p>
              <img src={callback} className="img-fluid" />
            </div>

            <div className="col-md-6">
                <div className="form-bg">
                    <p>Request a Callback</p>

                    <input type="text" className="form-control name" placeholder="Your Name"/>
                    <input type="email" className="form-control name" placeholder="Email Address"/>
                    <textarea type="text" rows="8" className="form-control" placeholder="Your message with your mobile number.."></textarea>

                    <button className="btn m-bt">REQUEST</button>
                </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
        </section>
      </div>
    </>
  );
};