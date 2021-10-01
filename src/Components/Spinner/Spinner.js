import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

const Spinner = ({ size = 50 }) => {
    return (
        <MoonLoader color="black" size={50} size={size || 'large'} style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" 
        }} />
    );
};

export default Spinner;