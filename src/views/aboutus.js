import React from 'react'
import about from '../img/about.webp'
import '../css/about.css';


export const About = () => {
    return (
        <>
            <div className="bg-white">
                <section className="abt-section  px-5 nw-section">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h1 className="about-h1">About bittstradeinvest.com</h1>
                            <p className="about-note">bittstradeinvest.com our goal is to promote the financial status of our clients through our uncompromised financial automated forex and binary software. bittstradeinvest trading platform is an Award winning forex Automated trader, providing trading services and financial support for both retail and institutional clients through its policy of providing the best trading signals, softwareâ€™s and strategies for investors, we offer both professionals and new beginners opportunity to invest and earn from Forex and Binary options trade. The objectives of bittstradeinvest.com are all subjected to matters in line with the international business companies entailing buying and selling of security stocks, bonds, mutual funds, financial lending, and Automated trading services in currencies, commodities, indexes and leveraged financial instruments.</p>
                        </div>

                        <div className="col-md-6">
                            <img src={about} className="img-fluid" />
                        </div>
                    </div>
                </section>



                <section className="px-5 pb-5 mt-4 nw-section">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="about-note">
                                Trading platform has positioned itself as the forex guru of choice for tradersâ€™ worldwide. One of the largest brands in the Global forex and BO automated industry that has continued to develop dynamically. A distinguished reputation, innovative approach and profitable working condition are our main advantages and this is why we are the choice of over one million clients.

                                Trader has brought a reliable, consistent and profitable financial assistance for our clients across the globe. Investment into our trading platforms are highly secured and managed by our expert traders alone to provide better risk management and profitable trading.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h2 className="font-weight-bold">TOP UP BALANCE</h2>
                            <p className="about-note">bittstradeinvest.com Here at bittstradeinvest.com we encourage adequate top-up funds leading to an increase in investment platforms. This Top-up balance allows already invested clients to increase their investment deposit at will. It helps for adequate account upgrade among various platforms.
                                Non investors are not allowed to use this as they do not have an existing account with us. Adequate steps can be made to secure an account portfolio which qualifies such client to benefit from Top-Up balance.For more information, kindly contact our help desk for adequate support.We appreciate your patronage and have pledged to serve you best.</p>

                            <h2 className="font-weight-bold">MONEY BACK GUARANTEE 100%</h2>

                            <p className="about-note">
                                We pledged to serve our clients with uttermost sincerity, honesty, credibility, excellent trading returns and we have maintained that since the inception of bittstradeinvest.com.Investors funds are strictly managed by financial expertise to enable us provide adequate return for our clients. Here, investors are not allowed to trade on their funds themselves to enable us reduce losses due to the high risk and volatility of the market.However, if in the course of our management and a loss occurs, the bittstradeinvest.com takes sole responsibility of such loss as part of our policy.
                            </p>

                            <h2 className="font-weight-bold">24/7 CUSTOMER SUPPORT</h2>
                            <p className="about-note">If you need any help along the way, a member of our professional customer support team will always be available to assist you 24/7 through Live Chat or email. You could even request a call back to discuss your query at your preferred time.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}