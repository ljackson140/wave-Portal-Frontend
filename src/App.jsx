import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there Cowboy!
        </div>

        <div className="bio">
        I am lord Frieza and I worked on selling planets by hiring the saiyan race, pretty cool right? Connect your Ethereum wallet and come explore the universe by waving at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
