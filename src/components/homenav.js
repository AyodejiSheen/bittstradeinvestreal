import React from 'react'
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


import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export const Homenav = () => {

    let history = useHistory();

    const gotohome = () => {
        history.push('/')
    }


    return (
        <>
         <section className="main-navbar ">
          <nav class="navbar px-5 main-nav navbar-expand-lg navbar-light">
              <img src={logo} alt="" className="brandlog" onClick={gotohome}/>
            <button
              class="navbar-toggler m-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/about-us">
                    ABOUT US
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/faqs">
                    FAQS
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="affiliate">
                    AFFILIATES
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    CONTACT
                  </Link>
                </li>


              <Link to="/login" className="nav-btnn">
                <button className="btn signin-btn">SIGN IN</button>
              </Link>

              <Link to="/signup" className="nav-btnn">
              <button className="btn signup-btn">SIGN UP</button>
              </Link>
              </div>

            </div>
          </nav>
        </section>


        </>
    )
}
