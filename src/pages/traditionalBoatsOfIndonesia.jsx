import React from "react"
import "./traditionalBoatsOfIndonesia.css"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import Grid from "../assets/trb-Grid.svg"
import Pinisi from "../assets/trb-Pinisi.png"
import Padewakang from "../assets/trb-Padewakang.png"
import Sandeq from "../assets/trb-Sandeq.png"
import Palari from "../assets/trb-Palari.png"

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
            <div className="mainBoatsContainer">
                <div style={{position: "fixed", zIndex: "13"}}>
                    <Navbar/>
                </div>
                <div className="scroller snapsInline" style={{backgroundColor: "#31445b", backgroundImage: `url(${Grid})`, backgroundRepeat: "repeat"}}>
                    <div className="boatsContentContainer">
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="descriptionWrapper">
                                    <div className={orientation? "boatsTitle" : "boatsTitleLandscape"}><h2>PINISI</h2></div>
                                    <div className="boatsLine"></div>
                                    <div className={orientation? "boatsSummary" : "boatsSummaryLandscape"}><p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum maiores adipisci minima voluptatum molestiae quos sint consectetur quam culpa?<b><u> selengkapnya...</u></b></p></div>
                                </div>
                            </div>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <div className="boatsImage" style={{position: "absolute", backgroundColor: "#31445b", backgroundSize: "120px 120px", backgroundRepeat: "repeat", backgroundImage: `url(${Grid})`}}></div>
                                <div className="boatsImage" style={{position: "absolute", backgroundSize: "100% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundImage: `url(${Pinisi})`}}></div>
                            </div>
                        </div>
                    </div>                    
                    <div className="boatsContentContainer">
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="descriptionWrapper">
                                    <div className={orientation? "boatsTitle" : "boatsTitleLandscape"}><h2>PALARI</h2></div>
                                    <div className="boatsLine"></div>
                                    <div className={orientation? "boatsSummary" : "boatsSummaryLandscape"}><p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum maiores adipisci minima voluptatum molestiae quos sint consectetur quam culpa?<b><u> selengkapnya...</u></b></p></div>
                                </div>
                            </div>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <div className="boatsImage" style={{position: "absolute", backgroundColor: "#31445b", backgroundSize: "120px 120px", backgroundRepeat: "repeat", backgroundImage: `url(${Grid})`}}></div>
                                <div className="boatsImage" style={{position: "absolute", backgroundSize: "100% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundImage: `url(${Palari})`}}></div>
                            </div>
                        </div>
                    </div>                    
                    <div className="boatsContentContainer">
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="descriptionWrapper">
                                    <div className={orientation? "boatsTitle" : "boatsTitleLandscape"}><h2>PADEWAKANG</h2></div>
                                    <div className="boatsLine"></div>
                                    <div className={orientation? "boatsSummary" : "boatsSummaryLandscape"}><p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum maiores adipisci minima voluptatum molestiae quos sint consectetur quam culpa?<b><u> selengkapnya...</u></b></p></div>
                                </div>
                            </div>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <div className="boatsImage" style={{position: "absolute", backgroundColor: "#31445b", backgroundSize: "120px 120px", backgroundRepeat: "repeat", backgroundImage: `url(${Grid})`}}></div>
                                <div className="boatsImage" style={{position: "absolute", backgroundSize: "100% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundImage: `url(${Padewakang})`}}></div>
                            </div>
                        </div>
                    </div>                    
                    <div className="boatsContentContainer">
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="descriptionWrapper">
                                    <div className={orientation? "boatsTitle" : "boatsTitleLandscape"}><h2>SANDEQ</h2></div>
                                    <div className="boatsLine"></div>
                                    <div className={orientation? "boatsSummary" : "boatsSummaryLandscape"}><p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum maiores adipisci minima voluptatum molestiae quos sint consectetur quam culpa?<b><u> selengkapnya...</u></b></p></div>
                                </div>
                            </div>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <div className="boatsImage" style={{position: "absolute", backgroundColor: "#31445b", backgroundSize: "120px 120px", backgroundRepeat: "repeat", backgroundImage: `url(${Grid})`}}></div>
                                <div className="boatsImage" style={{position: "absolute", backgroundSize: "100% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundImage: `url(${Sandeq})`}}></div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default TraditionalBoatsOfIndonesia