import React from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Baseurl } from '../baseurl';
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { isLogged } from './redux/actions';

export const Navbar  = ({profile}) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const logOut = () =>{
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

        <div  className="desk-nav">
        <div className="mb-5">
            <i class="far fa-user-circle"></i><br/>
            <p className='px-auto text-capitalize'><strong>{profile.username}</strong></p>
            </div>

            <Link to="/dashboard">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-stream pr-4"></i>Dashboard
            </div>
            </Link>

            <Link to="/dashboard/deposit">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-wallet pr-4"></i>Make an Investment 
            </div>
            </Link>

            <Link to="/dashboard/fund-management">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-balance-scale pr-4"></i>Fund Management
            </div>
            </Link>

            <Link to="/dashboard/withdraw">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-download pr-4"></i>Withdraw
            </div>
            </Link>

            <Link to="/dashboard/history">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-history pr-4"></i>History 
            </div>
            </Link>

            <Link to="/dashboard/referral" >
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-user-plus pr-4"></i>Referrals
            </div>
            </Link>

            <Link to="">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-ad pr-4"></i>Marketing Banners 
            </div>
            </Link>

            <Link to="/dashboard/security">
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-lock pr-4"></i>Two Factor Security
            </div>
            </Link>

            <Link to="/dashboard/settings" >
            <div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-cog pr-4"></i>Settings
            </div>
            </Link>

            <p onClick={logOut} style={{cursor:"pointer"}}><div className="my-4 nav-list">
            <span className="pr-4">- </span><i className="fa fa-power-off pr-4"></i>Logout
            </div>
            </p>
        </div>
            








            
        </>
    )
}

