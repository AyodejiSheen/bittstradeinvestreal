import React, { useEffect, useState } from 'react'
import { Dashhead } from '../components/dashhead';
import { Navbar } from '../components/navbar';
import '../css/dashboard.css'
import '../css/dashnav.css'
import { Route, Switch } from 'react-router-dom';
import logo from '../img/logo.webp';
import Home from './home';
import { Deposit } from './deposit';
import { Fund } from './fund';
import { Withdraw } from './withdraw';
import { Historypage } from './history';
import { Referral } from './referral';
import { Security } from './security';
import { Settings } from './settings';
import axios from 'axios';
import { Baseurl } from '../baseurl';
import { useDispatch } from 'react-redux';
import { isLogged } from '../components/redux/actions';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});
    // useEffect(() => {
    //     let token = sessionStorage.Token
    //     if (token) {
    //         axios.post(`${Baseurl}auth/me`, { token: token }).then((res) => {
    //             if (res.data) {
    //                 let data = res.data
    //                 dispatch(isLogged(true))
    //                 setProfile(data)
    //             }
    //         }).catch((error) => {
    //             if (error.response.status === 401) {
    //                 dispatch(isLogged(false))
    //             } else if (error.response.status === 500) {
    //                 dispatch(isLogged(false))
    //             }
    //         })
    //     } else {
    //         dispatch(isLogged(false))
    //     }
    // }, [])

    return (
        <>
        <Dashhead profile={profile}/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <Navbar profile={profile}/>
                </div>

                <div className="col-lg-9 spacer">

                <Switch>
                    <Route exact path='/dashboard'>
                        <Home profile={profile}/>
                    </Route>

                    <Route exact path='/dashboard/deposit'>
                        <Deposit profile={profile}/>
                    </Route>

                    <Route exact path='/dashboard/fund-management'>
                        <Fund/>
                    </Route>

                    <Route exact path='/dashboard/withdraw'>
                        <Withdraw/>
                    </Route>

                    <Route exact path='/dashboard/history'>
                        <Historypage/>
                    </Route>

                    <Route exact path='/dashboard/referral'>
                        <Referral/>
                    </Route>

                    <Route exact path='/dashboard/security'>
                        <Security/>
                    </Route>

                    <Route exact path='/dashboard/settings'>
                        <Settings profile={profile}/>
                    </Route>

                </Switch>


                </div>
            </div>
        </div>










        </>
    )
}

