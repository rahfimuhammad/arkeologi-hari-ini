import React from "react"
import "./traditionalBoatsOfIndonesia.css"
import Navbar from "../components/Navbar"
import { useEffect, useState, useRef } from "react"
import Grid from "../assets/trb-Grid.svg"
// import Pinisi from "../assets/trb-Pinisi.png"
// import Padewakang from "../assets/trb-Padewakang.png"
// import Sandeq from "../assets/trb-Sandeq.png"
// import Palari from "../assets/trb-Palari.png"
import axios from "axios"

const TraditionalBoatsOfIndonesia = () => {

    const [orientation, setOrientation] = useState(null)
    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
      
        const handleNext = () => {
          const newIndex = currentIndex + 1 >= data.length ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
          snapToSlide(newIndex);
        };
      
        const handlePrev = () => {
          const newIndex = currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
          snapToSlide(newIndex);
        };
      
        const snapToSlide = (index) => {
          const sliderWidth = sliderRef.current.offsetWidth;
          sliderRef.current.scrollTo({
            left: index * sliderWidth,
            behavior: 'smooth',
          });
        };
    

    const detectOrientation = () => {
    
        window.innerHeight > window.innerWidth?
            
        setOrientation(true) : setOrientation(false)}
    
    
            useEffect(() => {
                detectOrientation()
            })
    
            window.addEventListener('resize', detectOrientation)


            const onGetData = async() => {

                try {
                    let response = await axios.get(
                        "http://192.168.1.101:3000/traditionalBoats"
                        )
                    setData(response.data)
                } 
                catch (error) {
                }
            }

            useEffect(() => {
                window.scrollTo(0, 0)
                onGetData()
            },[])
        
            const mapContent = () => {
                
                return data.map((value, index) => {
                    return (
                        <div className="boatsContentContainer" key={index}>
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="descriptionWrapper">
                                    <div className={orientation? "boatsTitle" : "boatsTitleLandscape"}><h2>{value.name}</h2></div>
                                    <div className="boatsLine" style={{padding: orientation? "0 3vw" : "0 1vw"}}></div>
                                    <div className={orientation? "boatsSummary" : "boatsSummaryLandscape"}>
                                        <p style={{textAlign: "justify", display: orientation? "" : "none"}}>{value.summary}<b><u> selengkapnya...</u></b></p>
                                        <p style={{textAlign: "justify", display: orientation? "none" : ""}}>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <h3 className={orientation? "boatsImageSourcePortrait" : "boatsImageSourceLandscape"}>{value.source}</h3>
                                <div className={orientation? "boatsImage" : "boatsImageLand"}  style={{position: "absolute", backgroundColor: "#31445b", backgroundSize: "120px 120px", backgroundRepeat: "repeat", backgroundImage: `url(${Grid})`}}></div>
                                <div className={orientation? "boatsImage" : "boatsImageLand"} style={{position: "absolute", backgroundSize: "100% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundImage: `url(${value.image})`}}></div>
                            </div>
                        </div>
                    </div>       
                    )
                })
            }
    
    return (
        <>
            <div className="mainBoatsContainer">
                <div style={{position: "fixed", zIndex: "13"}}>
                    <Navbar/>
                </div>
                <div className="buttonContainer" style={{display: orientation? "none":"flex", flexDirection: "row",justifyContent: "space-between", position: "absolute", zIndex:"12", bottom: "5vh", right: "5%", width: "30vw", height: "5vw"}}>
                    <div onClick={currentIndex > 0? handlePrev : ""} className="prevButtonContainer" style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 255, 255, .8)", width: "14vw", height: "100%", cursor: "pointer"}}>
                        <div className="prevButton" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "12.5vw", height: "3.5vw", border: "2px solid #31445b"}}>
                            <h3 className="boatsImageSourceLandscape" style={{position: "static"}}>prev</h3>
                        </div>
                    </div>
                    <div onClick={currentIndex < data.length - 1? handleNext : ""} type="button" className="nextButtonContainer" style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 255, 255, .8)", width: "14vw", height: "100%", cursor: "pointer"}}>
                        <div className="nextButton" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "12.5vw", height: "3.5vw", border: "2px solid #31445b"}}>
                            <h3 className="boatsImageSourceLandscape" style={{position: "static"}}>next</h3>
                        </div>
                    </div>
                </div>
                <div className="scroller snapsInline" style={{backgroundColor: "#31445b", backgroundImage: `url(${Grid})`, backgroundRepeat: "repeat"}} ref={sliderRef}>
                    {mapContent()}      
                </div>
            </div>
        </>
    )
}

export default TraditionalBoatsOfIndonesia