import React, { Fragment } from 'react'
import faq from '../img/faqs.webp'
import '../css/faqs.css'
import { Accordion } from 'react-bootstrap'



const Frequent = () => {

    return (
        <Fragment>
            <section className="bg-white px-5 nw-section">
                <div className="row faqs-section">
                    <div className="col-md-6 pb-5 px-5 nw-section">
                        <h1>Frequently Asked Questions</h1>
                        <p className="about-note">Need any help getting started? You might find the answer you’re looking for in our Frequently Asked Questions. If you prefer to speak to one of our agents via email, phone call or live chat, our support team is available 24/7.</p>
                        <a href="/signup" class="gl-btn">Open Account</a>
                    </div>

                    <div className="col-md-6">
                        <img src={faq} className="img-fluid"></img>
                    </div>
                </div>


                <section className="faqss">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold m-4">Trading Accounts & General Information</h2>

                            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      How do you open a trading account?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      To open a new trading account, first sign up to the platform. From here you must create a deposit. Once you have deposited funds into your bittstradeinvest.com account, you are free to create a Trading account.
                                        To create a account go to:

                                        <li>Dashboard</li>
                                        <li>Trading Accounts</li>
                                        <li>Open a Trading Account</li>
                                        <li>Follow the prompts</li>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      What do you need to begin trading?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      All you need to start trading is an internet connection and a computer, smartphone or tablet.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What is the minimum deposit on bittstradeinvest.com?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       It is advised that clients deposit a minimum of $100 to start trading. While we do not enforce any minimum deposits, any amount under $100 may not appear in a trading account due to transaction fees on the Blockchain. The network charges 0.0005BTC per transaction which equates to $5 based on BTC price rate.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      Can you have more than one Trading Account account?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
      Yes. Investor can create as Live trading accounts as they wish, with different Trade plan settings and a baseline currency of BTC
      </div>
    </div>
  </div>
</div>
</div>




    <div className="col-md-6">
                            <h2 className="font-weight-bold m-4">Bitcoin & Cryptocurrencies</h2>

                            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
      What is Bitcoin?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body">
      Bitcoin is a peer-to-peer digital currency that enables lightning-fast transactions at low costs, eliminating any interference from government bodies or institutions.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading7">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
      Is Bitcoin Trading on bittstradeinvest.com safe?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading7">
      <div class="accordion-body">
      Yes. The bittstradeinvest.com network is fully secured and client funds are safely stored in cold storage - a completely offline BTC storage wallet for maximum security and out of reach of malicious online threats.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading8">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
      How can you profit from trading Cryptocurrencies?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading8">
      <div class="accordion-body">
      Trading Cryptocurrencies operates in a similar way to trading Fiat Currencies, although Cryptos are typically more volatile. Traders can generate profits by using Fundamental or Technical Analysis to help them trade. The Software also offers a range of indicators to help trade
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading9">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse9" aria-expanded="false" aria-controls="panelsStayOpen-collapse9">
      Can you have more than one Trading Account account?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading9">
      <div class="accordion-body">
      Yes. Investor can create as Live trading accounts as they wish, with different Trade plan settings and a baseline currency of BTC
      </div>
    </div>
  </div>
</div>
</div>




                        <div className="col-md-6 mt-5 ">
                            <h2 className="font-weight-bold m-4">Transactions & Payments</h2>


                            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading10">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse10" aria-expanded="true" aria-controls="panelsStayOpen-collapse10">
      What deposit methods are available at bittstradeinvest.com?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading10">
      <div class="accordion-body">
      The primary deposit method is a direct Bitcoin deposit. Traders can also buy and send Bitcoin via a third-party provider using a Credit Card, Cashapp or bank wire transfer.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      How can you deposit funds at bittstradeinvest.com?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      You can deposit in Bitcoin or by buying Bitcoin through a third-party provider by logging into your account and choosing the deposit option. If you choose to deposit in Bitcoin, enter the amount you wish to deposit and click the red ‘deposit funds’ button. You will be provided with a ‘one time use’ Bitcoin Wallet address and any funds sent to that address will be sent to your and saved your deposit bittstradeinvest.com account once funds are received. Note that you may need to saved your deposit.

                                        <p>To buy Bitcoin via third party provider or wire transfer, you will be redirected to a third-party website where you can buy and send Bitcoin directly to your bittstradeinvest.com account, or Cashapp .</p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading11">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false" aria-controls="panelsStayOpen-collapse11">
      How long will it take to process your withdrawal?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading11">
      <div class="accordion-body">
      Your Bitcoin withdrawal request will be reviewed on the same day of submission. Once approved, withdrawals are dependent on the speed of the blockchain and require at least 6 confirmations before landing in your wallet. Traders should typically allow 1 hour per confirmation but withdrawals usually arrive much sooner than 6 hours.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading12">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse12" aria-expanded="false" aria-controls="panelsStayOpen-collapse12">
      Can you trade after requesting a withdrawal?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse12" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading12">
      <div class="accordion-body">
      Yes, unless you have withdrawn all your funds. Withdrawn funds will be subtracted from your trading account immediately and be put into a holding account whilst the payments team reviews your transaction. You can cancel any pending withdrawal at any time by contacting our 24/7 support team.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading12">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse12" aria-expanded="false" aria-controls="panelsStayOpen-collapse12">
      What are the minimum and maximum deposit amounts?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse12" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading12">
      <div class="accordion-body">
      <p>Minimum<br></br>
                                            BTC = $100<br></br>
                                            Credit/debit card = $100</p>

                                        <p>
                                            Maximum<br></br>
                                            BTC = Unlimited<br></br>
                                            Credit/debit card = dependent on your monthly card limit and due diligence checks
                                        </p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading13">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse13" aria-expanded="false" aria-controls="panelsStayOpen-collapse13">
      Can you trade after requesting a withdrawal?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse13" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading13">
      <div class="accordion-body">Yes, unless you have withdrawn all your funds. Withdrawn funds will be subtracted from your trading account immediately and be put into a holding account whilst the payments team reviews your transaction. You can cancel any pending withdrawal at any time by contacting our 24/7 support team.
      </div>
    </div>
  </div>



  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading14">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse14" aria-expanded="false" aria-controls="panelsStayOpen-collapse14">
      What are the minimum withdrawal amounts?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse14" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading14">
      <div class="accordion-body"><p>Minimum<br></br>
                                            BTC = $100</p>

                                        <p>Maximum<br></br>
                                            BTC = Unlimited</p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading15">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse15" aria-expanded="false" aria-controls="panelsStayOpen-collapse15">
      What are the deposit and withdrawal fees?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse15" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading15">
      <div class="accordion-body">This is dependent on the speed of the blockchain. Please allow up to 6 confirmations for each transaction.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading16">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse16" aria-expanded="false" aria-controls="panelsStayOpen-collapse16">
      Do you offer any promotional bonuses?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse16" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading16">
      <div class="accordion-body">Yes. bittstradeinvest.com offer bonuses when there is an active bitcoin pump high or low but high leverage and some of the best trading conditions on the market. bittstradeinvest.com has an affiliate program giving you the chance to earn commission by referring traders to the company. Find out more
      </div>
    </div>
  </div>

</div>
                      </div>








                        <div className="col-md-6 mt-5 ">
                            <h2 className="font-weight-bold m-4">bittstradeinvest.com Affiliate Program</h2>


                            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading17">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse17" aria-expanded="true" aria-controls="panelsStayOpen-collapse17">
      How do I become an affiliate?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse17" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading17">
      <div class="accordion-body">
      To start earning a passive income through referring friends to bittstradeinvest.com click here: Signup
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading18">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse18" aria-expanded="false" aria-controls="panelsStayOpen-collapse18">
      What commission can I earn for referring my friends?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse18" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading18">
      <div class="accordion-body">
      Bittstradeinvest.com affiliates earn a commission of 5% per lot investor by their referrals. There's no limit to how many clients an Affiliate can refer and your commission may last a lifetime!
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading19">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse19" aria-expanded="false" aria-controls="panelsStayOpen-collapse19">
      How is commission paid?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse19" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading19">
      <div class="accordion-body">
      <p>Commission earned is paid at the end of each trade round.</p>
                                        But it can also be paid upon request. Minimum amount is $100 for both options.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading20">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse20" aria-expanded="false" aria-controls="panelsStayOpen-collapse20">
      How do I contact my affiliate manager?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse20" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading20">
      <div class="accordion-body">
      Contact your affiliate manager today at affiliates@bittstradeinvest.com. Request a call back and an affiliate manager will happily discuss marketing strategies to make your affiliate campaign a true success.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading21">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse21" aria-expanded="false" aria-controls="panelsStayOpen-collapse21">
      Are there marketing tools to help my campaign?
      </button>
    </h2>
    <div id="panelsStayOpen-collapse21" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading21">
      <div class="accordion-body">
      Yes! There is a pre set media pack containing banner, animations, graphics and more to help advertise your unique affiliate link.
      </div>
    </div>
  </div>






</div>

                        </div>


                    </div>

                </section>

            </section>
        </Fragment>
    )
}

export default Frequent
