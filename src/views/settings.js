import axios from 'axios';
import React, { Fragment, useRef, useState} from 'react'
import { FaBtc } from "react-icons/fa"
import { Baseurl } from '../baseurl';
import Alert from './alert';


export const Settings = ({profile}) => {
    const wallet = useRef();
    const [alert, setAlert] = useState({ status: '', message: '', show: false })
    const [isSubmitting, setSubmitting] = useState(false)
   
    const update = (e)=>{
       e.preventDefault();
       setSubmitting(true)
       let walletAddr = wallet.current.value;
       let token = sessionStorage.Token;
       if(walletAddr && token){
        axios.post(`${Baseurl}addwallet`, {wallet:walletAddr, token:token}).then((res)=>{
            setSubmitting(false)
            if(res.data === 'updated'){
                setAlert(alert => ({
                    ...alert,
                    status: 'success',
                    message: 'Wallet Updated',
                    show: true
                }))
                setTimeout(() => {
                    setAlert(alert => ({
                        ...alert,
                        show: false
                    }))
                }, 2000)
            }
        })
      }
    }
    return (
        <Fragment>
            <section class="main">
                <form onSubmit={update}>

                    <section id="bw-setting">
                        <div class="card card-body _bg_b " style={{ width: "100%" }}>
                            <h1 class="page-title">
                                <span>
                                    <i className="fa fa-cog mr-5 fa-2x" style={{ color: "blueviolet" }}></i>
                                </span>
                                <span>Account Settings</span>
                            </h1>


                            {/* <div class="form-group mt-4">
                                <label>Change Your Password</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input name="password" value="" placeholder="Enter the password" type="password" class="form-control mb-2" />
                                    </div>
                                    <div class="col-md-6">
                                        <input name="password2" value="" placeholder="Retype the password" type="password" class="form-control" />
                                    </div>
                                </div>
                            </div> */}




                            <div class="form-group mt-3">
                                <Alert status={alert.status} message={alert.message} show={alert.show}/>
                                <label><span style={{ width: "20px", height: "20px", marginRight: "5px", fill: "#6881b4" }}>
                                    <FaBtc className="btc-icon" />
                                </span> Your BITCOIN Wallet address</label>
                                <input type="text" class='form-control' ref={wallet}  defaultValue={profile.wallet_addr}/></div>


                            <div class="mt-3 text-center">
                                <button type="submit" class="btn btn-warning btn-lg"disabled={isSubmitting}>{isSubmitting ? <i class="fas fa-spinner fa-spin"></i> : ''} Update Settings</button>
                            </div>

                        </div>
                    </section>
                </form>

                <div class="panel-footer">
                    <nav class="float-right menu d-none d-md-block">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Managed Investment</a></li>
                            <li><a href="#">Referral Program</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </nav>

                    <ul class="socials float-left">

                    </ul>

                    <div class="clearfix"></div>

                </div>
            </section>


        </Fragment>
    )
}

