import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from '../shared/components/auth/signUp/signUp';
import { AuthContext } from '../context/AuthContext';
import Login from '../shared/components/auth/login/login';
import CountryDashboard from '../shared/components/pages/country-dashboard/country-dashboard';

const Router = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {user == null && (
                        <>

                            <Route exact path='/' element={<Signup />} />

                            <Route exact path='/signup' element={<Signup />} />


                        </>
                    )}
                    {user != null && (
                        <>

                           

                            <Route exact path='/login' element={<Login/>} />


                        </>
                    )}
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/country-dashboard' element={< CountryDashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;