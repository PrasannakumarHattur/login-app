import React, { useState, createContext } from 'react';
import Axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const signUp = async(email, password) => {
        const newUser ={
            firstName: "prasann",
            lastName :"shubam",
            email ,password, age:10
        }
        try {
            // const newUser = {
            //     email, password, token: `jwt_token_${Math.random().toString(36).substring(2)}`
            // }
            const response =await Axios.post("https://dummyjson.com/users/add",newUser)
            console.log(response.data)
            setUser(response.data)
            return true;

        } catch (error) {
            return false;
        }
    }
    
        const login = async (email, password) => {
            try {
                const response = await Axios.get('https://dummyjson.com/users',{
                  params: {
                    limit:210,
                    Skip:0,
                  },
                });
                const users = response.data;
                const foundUser = users.find(user => user.email === email && user.password === password);
                console.log(users);
                
                console.log(foundUser,"foundUser");
                
                if (foundUser) {
                    const token = jwtDecode(foundUser.token);
                    setUser({ ...foundUser, token });
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error(error);
                return false;
            }
        };
    
    return (
        <>
            <AuthContext.Provider value={{signUp,user,login}}>{children}
            </AuthContext.Provider>
        </>

    )
}


export {AuthProvider}
