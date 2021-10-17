import React from 'react'
import '../css/dashboard.css';
import { FaBtc } from 'react-icons/fa';
import logo from '../img/logo.webp';
import { Baseurl } from '../baseurl';
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { isLogged } from './redux/actions';
import axios from 'axios';




export const Dashhead = ({ profile }) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const logOut = () => {
        let token = sessionStorage.Token;
        axios.post(
            `${Baseurl}auth/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => {
                if (res.data.message) {
                    history.push("/login");
                    dispatch(isLogged(false));
                    sessionStorage.removeItem("Token");
                }
            });
    }
    return (
        <>

            <div class="container  mb-4">

                <header id="cf-panel-header">
                    <a href="/" class="logo">
                        <img src={logo} />
                    </a>

                    <div class="panelSelect d-lg-none d-inline-block">
                        <div class="selected">
                            <svg class="icon btc">
                            </svg>
                            <span class="name text-capitalize">bitcoin</span>
                            <svg class="chevron">
                            </svg>
                        </div>
                    </div>


                    <span className="navbar dash-navbar">
                        <input type="checkbox" id="check" />
                        <label for="check" className="checkbtn">
                            <i className="fa fa-bars"></i>
                        </label>
                        <ul>

                            <div className="mb-5">
                                <i class="far fa-user-circle"></i><br />
                                <p className='px-auto text-capitalize'><strong>{profile.username}</strong></p>
                            </div>

                            <a href="/dashboard">
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-stream pr-4"></i>Dashboard
                                </div>
                            </a>

                            <a href='/dashboard/deposit'>
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-wallet pr-4"></i>Make an Investment
                                </div>
                            </a>

                            <a href='/dashboard/fund-management'>
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-balance-scale pr-4"></i>Fund Management
                                </div>
                            </a>

                            <a href='/dashboard/withdraw'>
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-download pr-4"></i>Withdraw
                                </div>
                            </a>

                            <a href='/dashboard/history'>
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-history pr-4"></i>History
                                </div>
                            </a>

                            <a href='/dashboard/referral' >
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-user-plus pr-4"></i>Referrals
                                </div>
                            </a>

                            <a href="/">
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-ad pr-4"></i>Marketing Banners
                                </div>
                            </a>

                            <a href='/dashboard/security'>
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-lock pr-4"></i>Two Factor Security
                                </div>
                            </a>

                            <a href='/dashboard/settings' >
                                <div className="my-4 nav-list">
                                    <span className="pr-4">- </span><i className="fa fa-cog pr-4"></i>Settings
                                </div>
                            </a>

                            <p onClick={logOut}><div className="my-4 nav-list">
                                <span className="pr-4">- </span><i className="fa fa-power-off pr-4"></i>Logout
                            </div>
                            </p>
                        </ul>
                    </span>

                    <div class="info d-none d-lg-block">
                        <ul>
                            <li>
                                <div class="phone float-right">
                                    <span class="icon">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    &nbsp; +61480004240
                                </div>
                            </li>
                            <li>
                                <div class="phone float-right">
                                    <a href="mailto:support@bittsmarket.com">
                                        <span class="icon">
                                            <i className="fa fa-envelope "></i>
                                        </span>
                                        &nbsp; Admin@bittsmarket.com
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="panelSelect">
                                    <div class="selected">
                                        <span class="icon btc px-1 py-1 text-white">
                                            <FaBtc className="text-white" />
                                        </span>
                                        <span class="name text-capitalize ml-2">bitcoin</span>
                                        <span class="chevron">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                    </div>


                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>

        </>
    )
}

