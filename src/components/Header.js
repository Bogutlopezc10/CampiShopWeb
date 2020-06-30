import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return (
        <div className="nav shadow align-items-stretch justify-content-between fixed-top">
            <div className="col-md-12 col-lg d-flex align-items-center justify-content-center justify-content-lg-start">
                <Link to="/">
                    Logo
                </Link>
            </div>
        </div>
    )
}

export default Header;