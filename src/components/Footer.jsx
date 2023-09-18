import React from "react";
import "./footer.css"
import Twitter from "./Footer/twitter.png"
import Linkedin from "./Footer/linkedin.png"
import Instagram from "./Footer/instagram.png"

const Footer = () => {
    
    return (
        
            <div className="footer-container">
                <div className="say-hi">
                    <h3>Hubungi kami:</h3>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/archaeology-today-1a395928b/">
                        <div className="socmed">
                            <img src={Linkedin} alt="linkedin"/>
                            <h5>Linkedin</h5>
                        </div>
                    </a>
                    <a href="https://twitter.com/arcToday">
                        <div className="socmed">
                            <img src={Twitter} alt="twitter"/>
                            <h5>Twitter</h5>
                        </div>
                    </a>
                        <div className="socmed">
                            <img src={Instagram} alt="instagram"/>
                            <h5>Instagram</h5>
                        </div>
                </div>
            </div>
        
    )
}

export default Footer