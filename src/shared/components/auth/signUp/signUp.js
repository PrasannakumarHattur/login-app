// src/Login.js
import React, { useState, useContext } from 'react';
import './signUp.css';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (email && password != null) {


            const success = signUp(email, password)
            console.log(success)
            if (success) {
                alert("signup succcessfully")
                navigate('/login');
            }
            else {
                alert("signup fail")
            }
        } else {
            alert("do not empty email & password")
            setErrorMessage('Invalid email or password.');
        }


    };

    return (
        <div className="flex-container">
            <form onSubmit={handleSignup}>
                <h1 className="heading">Please Sign-Up</h1>
                <div className="input-group">

                    <Input handleChange={(e) => setEmail(e.target.value)} loginvalue={email} type="email" className="email" placeholder="Email Id" name="email" />
                </div>
                <div className="input-group">

                    <Input handleChange={(e) => setPassword(e.target.value)} loginvalue={password} type="password" className="password" placeholder="Password" name="password" />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <Button name="Sign Up" />
            </form>
        </div>
    );
};

export default Signup;
