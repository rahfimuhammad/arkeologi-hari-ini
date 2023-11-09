import React from "react"
import "./traditionalBoatsOfIndonesia.css"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import Grid from "../assets/trb-Grid.png"
import Pinisi from "../assets/trb-Pinisi.png"

const TraditionalBoatsOfIndonesia = () => {

    const [orientation, setOrientation] = useState(null)

    const detectOrientation = () => {
    
        window.innerHeight > window.innerWidth?
            
        setOrientation(true) : setOrientation(false)}
    
    
            useEffect(() => {
                detectOrientation()
            })
    
            window.addEventListener('resize', detectOrientation)
    
    return (
        <>
            <div className="mainBoatsContainer" style={{backgroundColor: "#abc0dd", backgroundImage: `url(${Grid})`, backgroundSize: "50px 50px", backgroundRepeat: "repeat"}}>
                <div style={{position: "fixed"}}>
                    <Navbar/>
                </div>
                <div className="scroller snapsInline">
                    <div className="boatsContentContainer">
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <div style={{position: "absolute", backgroundColor: "black", backgroundSize: "auto 100%", backgroundPosition: "center center", backgroundImage: `url(${Pinisi})`, width: "90%", height: "60.75vw", top: "4.5vw", right: "5%", left: "5%"}}></div>
                            </div>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="boatsTitle"><h2>Pinisi</h2></div>
                                <div className="boatsSummary"><p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum maiores adipisci minima voluptatum molestiae quos sint consectetur quam culpa?</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="boatsContentContainer">
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <div style={{position: "absolute", backgroundColor: "black", backgroundSize: "auto 100%", backgroundPosition: "center center", backgroundImage: `url(${Pinisi})`, width: "90%", height: "60.75vw", top: "4.5vw", right: "5%", left: "5%"}}></div>
                            </div>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="boatsTitle"><h2>Pinisi</h2></div>
                                <div className="boatsSummary"><p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum maiores adipisci minima voluptatum molestiae quos sint consectetur quam culpa?</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TraditionalBoatsOfIndonesia