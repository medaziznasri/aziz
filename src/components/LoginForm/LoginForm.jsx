import React from 'react';
import './LoginForm.css';
import { FaRegUser, FaLock } from "react-icons/fa";
import Header from '../HomePage/Header';
function LoginForm() {
    return (
        
        
        <div className='login-body'>
            <div className='wrapper'>
                 
                 
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaRegUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    {/* Replace '#' with a valid link or use a button */}
                    <a href="#">Forgot password</a>
                </div>
                <button type="submit" className='login-button'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/Register">Register</a></p>
                </div>
            </form>
            </div>
            </div>
    );
};

export default LoginForm;
