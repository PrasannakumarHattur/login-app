// src/Login.js
import React, { useState ,useContext } from 'react';
import './login.css';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import { AuthContext } from '../../../../context/AuthContext';
import {   useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        const success = login(email, password);
        if (success) {
            navigate('/country-dashboard');
        } else {
            alert('Login failed.');
        }

        //     if (email == 'prasann@gmail.com' && password == 123) {
        //         alert('Login successful!');
        //         setErrorMessage('');

        //     } else {
        //         setErrorMessage('Invalid email or password.');
        //     }
    };

    return (
        <div className="flex-container">
            <form onSubmit={handleLogin}>
                <h1 className="heading">Please Login</h1>
                <div className="input-group">

                    <Input handleChange={(e) => setEmail(e.target.value)} loginvalue={email} type="email" className="email" placeholder="Email Id" name="email" />
                </div>
                <div className="input-group">

                    <Input handleChange={(e) => setPassword(e.target.value)} loginvalue={password} type="password" className="password" placeholder="Password" name="password" />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <Button name="Login" />
            </form>
        </div>
    );
};

export default Login;
