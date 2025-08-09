import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import banner from '../../images/aniket.jpg'; 
import { GiChainedArrowHeads } from "react-icons/gi";


const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-image-container">
        <img src={banner} alt="Banner" className="header-image" />
        <div className="header-overlay">
          <h1 className="hero-title">Deals You Can't Miss!</h1>
          <p className="hero-subtitle">
            Your one-stop shop for the latest trends
          </p>
          <Link className="btn btn-warning btn-lg mt-3" to="/">
            Shop Now
          </Link>
        </div>
        <div>
      <p className="text-center mb-4" style={{marginTop:40}}>
          <GiChainedArrowHeads color='red'/><GiChainedArrowHeads /><GiChainedArrowHeads />&nbsp;&nbsp;&nbsp;
                Explore our exclusive range of top-quality products carefully selected for you.
          &nbsp;&nbsp;&nbsp;<GiChainedArrowHeads /><GiChainedArrowHeads /><GiChainedArrowHeads color='red'/>
              </p>
      </div>

        </div>
    </div>
  );
};

export default Header;
