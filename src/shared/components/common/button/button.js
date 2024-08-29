import React from 'react';
import './button.css';

const Button = ({name ,handleButtons}) => {

    return(
        <>
        <button onClick={handleButtons} type="Submit" className= "countrybutton">{name }</button>

        </>
    )

}
export default Button;