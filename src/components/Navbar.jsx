import React from "react";
import "./navbar.css"
import logo from './Navbar/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <Link to="/">
                    <img className="logo" src= {logo} unselectable="on" alt="logo"/>
                </Link>
            </div>
        </>
    )
}

export default Navbar