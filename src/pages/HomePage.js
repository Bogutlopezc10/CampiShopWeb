import React from 'react';
import { FaMobileAlt , FaLaptop, FaDesktop, FaTabletAlt, FaXbox, FaPlaystation, FaAngleDoubleRight } from "react-icons/fa";
import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="background-home">
      <div className="bg-gradient">
        <div className="container">
          <div className="row main-home">
            <div className="col-12 d-flex justify-content-center">
              <h1>You will find the best products</h1>
            </div>
            <div className="icons mt-4 col-12 d-flex justify-content-center align-items-center">
              <FaMobileAlt />
              <FaPlaystation />
              <FaLaptop />
              <FaTabletAlt />
              <FaXbox />
              <FaDesktop />
            </div>
            <div className="col-12 mt-4 d-flex justify-content-center">
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
    </div>
  )
}

export default HomePage;
