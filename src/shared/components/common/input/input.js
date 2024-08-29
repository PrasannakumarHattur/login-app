import React from 'react';

const Input = ({ handleChange, loginvalue, type, className, placeholder, name }) => {

    return (
        <>
            <input onChange={handleChange} value={loginvalue} name={name} type={type} className={className} placeholder={placeholder} />
           

            
        </>
    )

}
export default Input;