import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';
import SignUpForm from '../SignUpForm/SignUpForm.js';
import RubyVacationsLogoTransparent from '../assets/RubyVacationsLogoTransparent.gif';
import './LoginSignUpPage.css';


function LoginSignUpPage({ setUser, setIsAuthenticated }) {

    return (
        <div className='login-signup-page'>
            <div className='forms-div'>
                <div className='login-form-div'>
                    <LoginForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
                <div className='login-logo-div'>
                    <img src={RubyVacationsLogoTransparent} className="login-logo" alt="logo" />
                </div>
                <div className='signup-form-div'>
                    <SignUpForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignUpPage;