import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import './Header.css';

const Header = () => {
  return (
    <div className="nav shadow align-items-stretch justify-content-between fixed-top">
      <div className="col-auto d-flex align-items-center justify-content-start">
        <Link to="/">
          CampiShop
                </Link>
      </div>
      <nav className="col-auto px-0 menu d-flex align-items-stretch">
        <Link className="d-flex px-3 align-items-center" to={'/products'}>
          <div className="d-flex flex-column text-center">
            <span>Categories</span>
          </div>
        </Link>
        <Link className="d-flex px-3 align-items-center" to={'/categories'}>
          <div className="d-flex flex-column text-center">
            <FaShoppingCart />
          </div>
        </Link>
        <Link className="d-flex px-3 align-items-center" to={'/categories'}>
          <div className="d-flex flex-column text-center">
            <img src="/login.png" width="45" height="45" className="rounded-circle shadow z-depth-0"
              alt="photoHeaderNotAuthenticator" />
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Header;
