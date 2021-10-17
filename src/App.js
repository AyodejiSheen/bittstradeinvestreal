import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup  from './views/signup';
import { Dashboard } from './views/dashboard';
import { Errorpage } from './views/errorpage';
import PasswordReset from './views/password_reset';
import Login from './views/login';
import AccountVerification from './views/account_verification';
import DashboardGuard from './components/redux/guard/dashboard_guard';
import { useSelector } from 'react-redux';
import { Homepage } from './views/homepage';
import { Homenav } from './components/homenav';
import { Footer } from './components/footer';
import { About } from './views/aboutus';
import { Contact } from './views/contact';
import { Affiliate } from './views/affiliate';
import Frequent from './views/faqs';
import { Adminpage } from './views/admin';


function App() {
  const auth = useSelector(state => state.auth)
  
  return (

    <>
      <Router>
        <Switch>
        <Route exact path="/">
        <Homenav/>
            <Homepage/>
            <Footer/>
          </Route>

          <Route exact path="/about-us">
            <Homenav/>
            <About/>
            <Footer/>
          </Route>

          
          <Route exact path="/contact">
            <Homenav/>
            <Contact/>
            <Footer/>
          </Route>


          <Route exact path="/affiliate">
            <Homenav/>
            <Affiliate/>
            <Footer/>
          </Route>


          <Route exact path="/faqs">
            <Homenav/>
            <Frequent/>
            <Footer/>
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/account-verification/:email">
            <AccountVerification />
          </Route>

          <Route exact path="/password-reset">
            <PasswordReset />
          </Route>


          <Route exact path="/admin">
            <Adminpage/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

        
        {/* <DashboardGuard path="/dashboard" component={Dashboard} auth={auth} />

           */}

          <Route exact path="*">
            <Errorpage />
          </Route>



        </Switch>
      </Router>


    </>
  );
}

export default App;
