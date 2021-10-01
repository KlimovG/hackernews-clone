import React, { useEffect, useState } from "react";
import './error.css'

const Error = () => {
  return (
    <div className="error">
      <h2 className="error__title">Search failed successfully!</h2>
      <img className="error__gif" src="./img/error.gif" alt="Homer Error" />
    </div>
  )
}

export default Error;