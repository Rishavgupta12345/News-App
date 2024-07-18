import React, { Component } from "react";
import loading from "./loading.gif";

const Spinner =()=> {
 
    return (
      <div className="centered-div">
        <img src={loading} alt="loading" />
      </div>
    );
  
}
