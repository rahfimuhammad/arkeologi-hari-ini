import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "./home.css"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
    <>
        <Navbar/>
            <div className="main">
            <div className="home-container">
                <div className="content-wrapper">
                    {/* <Link className="content" id="museumReview" to= "museum-list"></Link> */}
                    <Link className="content" id="litografiBatavia" to= "litografi-batavia"></Link>
                    <Link className="content" id="traditionalBoatsOfIndonesia" to= "perahu-nusantara"></Link>
                    <Link className="content" id="borobudurInNumbers" to= "borobudur-dalam-angka"></Link>
                    <Link className="content" id="prehistoricOfIndonesia" to= "prasejarah-indonesia"></Link>
                </div>
            </div>
            <Footer/>
        </div>
    </>
        

    )
    
}

export default Home