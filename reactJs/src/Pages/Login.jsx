import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "") {
            alert("User name must be filled out");
            return;
        }
        if (userPassword === "") {
            alert("Password must be filled out");
            return;
        }
        // Add login logic here
        console.log('Submitted:', { username, userPassword });
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <div className="auth-form-container">
                    <div className="auth-input-group">
                        <div className="auth-title"><strong>Login</strong></div>
                        <label htmlFor="auth-username"><b>User name</b></label>
                        <input
                            type="text"
                            placeholder="Enter User name"
                            name="username"
                            className="auth-input user" // Changed class name here
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="auth-input-group">
                        <label htmlFor="auth-password"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="userPassword"
                            className="auth-input password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                         <Link to="Main/Home"> <button type="submit" className="auth-button">Login</button> </Link>
                         </div>
                    <div className="auth-checkbox-container">
                        <label>
                            <input type="checkbox" name="rememberMe"/> Remember me
                        </label>
                    </div>
                </div>
                <span className="auth-password-reset">
                    Forgot <a href="forget" className="auth-link-password">password?</a>
                    <a href="register" className="auth-link-create">Register</a>
                </span>
            </form>
        </div>
    );
};

export default Login;
