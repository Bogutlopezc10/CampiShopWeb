import React from 'react';
import { FaMobileAlt, FaLaptop, FaDesktop, FaTabletAlt, FaAngleDoubleRight } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="background-home">
      <div className="bg-gradient">
        <div className="main-home">
          <div>
            <h1>You will find the best products</h1>
          </div>
          <div className="icons">
            <FaMobileAlt />
            <FaLaptop />
            <IoLogoGameControllerB />
            <FaTabletAlt />
            <FaDesktop />
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <Link to="/products" className="btn-epic">
              <div>
                <span>See catalogue <FaAngleDoubleRight /></span>
                <span>See catalogue <FaAngleDoubleRight /></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
