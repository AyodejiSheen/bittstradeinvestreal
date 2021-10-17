import React from 'react';
import logo from '../img/logo.webp';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/admin.css'

export const Adminpage = () => {

    let history = useHistory();

    const gotohome = () => {
        history.push('/')
    }


    return (
        <>
        <div className="bg-white">
            <section className="bg-white shadow-sm">
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
                <li class="nav-item active text-center">
                    <i className="fa fa-user-circle"></i>
                    <p className="mb-0">Admin</p>
                </li>
               
              </div>

            </div>
          </nav>
        </section>


        <section className="container">
            <div className="row form-bg mt-3">
                <div className="col-md-9">
                <input type="text" className="form-control name" placeholder="Your Name"/>
                </div>

                <div className="col-md-3">
                    <button className="btn admin-search shadow mt-3">SEARCH</button>
                </div>
            </div>
        </section>

        <h3 className="text-center mt-5 "><strong>Search Results</strong></h3>

        <section className="container">
            <div className="row form-bg mt-5">
                <h2 className="text-left">Adebayo Great</h2>
                <div className="col-md-9">
                <input type="text" className="form-control name" placeholder="Your Name"/>
                </div>

                <div className="col-md-3">
                    <button className="btn admin-search shadow mt-3">ADD</button>
                </div>

                <div className="col-md-9">
                <input type="text" className="form-control name" placeholder="Your Name"/>
                </div>

                <div className="col-md-3">
                    <button className="btn admin-search shadow mt-3">SUBTRACT</button>
                </div>
            </div>
        </section>



        </div>
        </>
    )
}

