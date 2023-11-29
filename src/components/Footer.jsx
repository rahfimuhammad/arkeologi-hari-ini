import React from "react";
import "./footer.css"
import Twitter from "./Footer/twitter.png"
import Linkedin from "./Footer/linkedin.png"
import Instagram from "./Footer/instagram.png"
import Donate from "./Footer/donate.svg"

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
                    <a href="https://trakteer.id/afimuhammad" target="blank">
                        <div className="trakteer" style={{width: "100%", height: "fit-content", padding: "25px 0 0 0", display: "flex", justifyContent: "center"}}>
                            <div style={{width: "fit-content", height: "fit-content", padding: "4px", display: "flex", flexDirection: "row", gap: "5px", alignItems: "center"}}>
                                <img src={Donate} style={{width: "30px", height: "30px"}}/>
                                <h5 style={{margin: "0"}}>Support me</h5>
                            </div>
                        </div>
                    </a>
            </div>
        
    )
}

export default Footer