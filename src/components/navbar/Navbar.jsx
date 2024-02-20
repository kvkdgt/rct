import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
   
    return (
      <div>
        <div className="main-header">
          <header>
            
            <div class="logo">
                <div class="site-name">RCT (Real Change Trust)</div>
                <div className="tagline">DRUG & ALCOHOL ADDICTION TREATMENT</div>
            </div>
            <div className="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>
            </div>
            <div class="option-list">
              <span className="options">About US</span>
              <span className="options call-button">Call Now</span>
            </div>
          </header>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  