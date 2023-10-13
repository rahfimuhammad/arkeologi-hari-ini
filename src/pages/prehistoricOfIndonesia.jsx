import "./prehistoricOfIndonesia.css"
import React, { useEffect, useState} from "react";
import axios from 'axios'
import {motion} from "framer-motion"
import Navbar from "../components/Navbar"
import ScrollIcon from "./assetsPrehistoricOfIndonesia/scrollIcon.png"


const PrehistoricOfIndonesia = () => {

    const [offSetY, setOffSetY] = useState(0)
    const [data, setData] = useState([])
    const [description, setDescription] = useState([])
    const [button, setButton] = useState([])
    const [modal, setModal] = useState(false)
    const [orientation, setOrientation] = useState(null)

    // Parallax Scroll Handle and useEffect
    
    const handleScroll = () => setOffSetY(window.scrollY) 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        
        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

    // Fetch data from API to useState
    
    const onGetData = async() => {

        try {
            let response = await axios.get(
                "https://prehistoric.cyclic.app/prehistoric"
                )
            setData(response.data)
        } 
        catch (error) {
        }
    }

    useEffect(() => {
        onGetData()
        window.scrollTo(0, 0)
    }, [])

    // Filtering data from by index

    let onFiltering = async(index) => {
        try {
            let responseDescription = await axios.get(
                `https://prehistoric.cyclic.app/prehistoric?category=${index}`
                )
            setDescription(responseDescription.data)
            setModal(!modal)
        } catch (error) {
            
        }
    }

    const detectOrientation = () => {
    
        if (window.innerHeight > window.innerWidth) {
            setOrientation(true)}
        else {
            setOrientation(false)}}
    
    
            useEffect(() => {
                detectOrientation()
    
                // console.log(orientation)
            })
    
            window.addEventListener('resize', detectOrientation)

    // Modal Handle Button

    let toggleModal = () => {
        setDescription([])
        setModal(!modal)
    }

    useEffect(() => {
        
        if (modal) {
          document.body.style.overflow = 'hidden'}
        else {
            document.body.style.overflow = 'unset'}
      }, [modal])

    // Set Button by Image ftom API

    useEffect(() => {
        
        const onGetButton = () => {
        
            let responseButton = data.map((value) => {
                return value.button
            })
            setButton(responseButton)
        }
        onGetButton()
    },[data])

    // Function to prevent loading data from API

       const imageOnLoad = (event) => {
        console.log(`Picture successfully ${event.currentTarget.src} loaded.`);
        if (event.currentTarget.className !== "error") {
          event.currentTarget.className = "success";
        }
      };
     

    return (
<>
<Navbar/>
                
                <div className="prehistoricParallaxContainer">
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="background" 
                    style={{transform: `translateY(${offSetY * 0.4}px)`, top: orientation? "3vh" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="mountain" 
                    style={{transform: `translateY(${offSetY * 0.4}px)`, top: orientation? "3vh" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="logoland" 
                    style={{transform: `translateY(${offSetY * 0.4}px)`, top: orientation? "5vh" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="jungle0" 
                    style={{transform: `translateY(${offSetY * 0.35}px)`, bottom: orientation? "" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="jungle1" 
                    style={{transform: `translateY(${offSetY * 0.3}px)`, bottom: orientation? "" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="jungle2" 
                    style={{transform: `translateY(${offSetY * 0.25}px)`, bottom: orientation? "" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="jungle3" 
                    style={{transform: `translateY(${offSetY * 0.2}px)`, bottom: orientation? "" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="jungle4" 
                    style={{transform: `translateY(${offSetY * 0.15}px)`, bottom: orientation? "" : "0" }}
                    ></div>
                    <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="jungle5" 
                    style={{transform: `translateY(${offSetY * 0.1}px)`, bottom: orientation? "" : "0" }}
                    ></div>
                      <div className={orientation? "parallaxImage" : "landscapeParallaxImage"} id="prehistoricMan"  
                    ></div>
                    <div className={offSetY > 0? "displayNone" : "prehistoricInstruction"}>
                        <img className="scrollIcon" src={ScrollIcon}/>
                    </div>
                </div>
                    

                <div className="prehistoricMainContainer" style={{top: orientation?  "calc(100vh - 54vw)" : "114vh"}}>
                            {/* Line */}
                            <div className="prehistoricLineContainer" >
                                    <div className="middle-line-first">
                                        <div className="line-one"></div>
                                        <div className="line-horizontal"></div>
                                    </div>
                                    <div className="block"></div>
                                    <div className="side-line-first">
                                        <div className="line-wrapper">
                                            <div className="line-wrap">
                                                <div className="line-two"></div>
                                                <div className="line-horizontal"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle-line-second">
                                        <div className="line-three"></div>
                                    </div>
                                    <div className="side-line-second">
                                        <div className="line-wrapper">
                                            <div className="line-wrap">
                                                <div className="line-four"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block" 
                                        style={{margin: "0",
                                        border: "none"}}>
                                    </div>
                            </div>

                            {/* Content */}
                            <div className="prehistoricContentContainer">
                                <div className="dashed-line"></div>
                                <div className="content-container-first" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(0)} id="btn" type="image" src= {button[0]} style={{backgroundColor: "#a3a3a3"}} alt="Stone Tools" onLoad={imageOnLoad}></input>
                                        <input onClick={() => onFiltering(1)} id="btn" type="image" src= {button[1]}  style={{backgroundColor: "#d0ddef"}} alt="Nomadic" onLoad={imageOnLoad}></input>
                                        <input onClick={() => onFiltering(2)} id="btn" type="image" src= {button[2]} style={{backgroundColor: "#b57c7c"}} alt="Hunting and Gathering" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(3)} id="btn" type="image" src= {button[3]} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Arkaik" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>1.8 juta tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="dashed-line" style={{width: "49%"}}></div>
                                <div className="content-container-second" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"></div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(4)} id="btn" type="image" src= {button[4]} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Tipik" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>0.75 juta tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="dashed-line" style={{width: "49%"}}></div>
                                <div className="content-container-third" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"></div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(5)} id="btn" type="image" src= {button[5]} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Progresif" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>0.25 juta tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-fourth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(6)} id="btn" type="image" src= {button[6]} style={{backgroundColor: "#dbe2f0"}} alt="Settling" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container" style={{justifyContent: "flex-start"}}>
                                        <input onClick= {() => onFiltering(7)} id="btn" type="image" src= {button[7]} style={{backgroundColor: "#545245"}} alt="Homo Floresiensis" onLoad={imageOnLoad}></input>
                                        <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                            <span id="years-container">
                                                <div id="years">
                                                    <p>94.000 tahun yang lalu</p>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashed-line"></div>
                                <div className="content-container-fifth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(8)} id="btn" type="image" src= {button[8]} style={{backgroundColor: "#a3a3a3"}} alt="Bone-Tool" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(9)} id="btn" type="image" src= {button[9]} style={{backgroundColor: "#2c2b24"}} alt="Homo Wajakensis" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container" style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>70.000 tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-sixth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(10)} id="btn" type="image" src= {button[10]} alt="Rock Art" style={{backgroundColor: "#53625c"}} onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container-middle">
                                    </div>
                                    <div className="btn-container">
                                    </div>
                                </div>
                                <div className="dashed-line"></div>
                                <div className="content-container-seventh" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(11)} id="btn" type="image" src= {button[11]} style={{backgroundColor: "#b57c7c"}} alt="Food Producing" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(12)} id="btn" type="image" src= {button[12]} style={{backgroundColor: "#bdb8ad"}} alt="Homo Sapiens" onLoad={imageOnLoad}></input>
                                    </div>
                                    <div className="btn-container" style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>15.000 tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-eighth" style={{justifyContent: "flex-start"}}>
                                    <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(14)} id="btn" type="image" src= {button[14]} style={{backgroundColor: "#a3a3a3"}} alt="Stone Tools" onLoad={imageOnLoad}></input>
                                        <input onClick= {() => onFiltering(13)} id="btn" type="image" src= {button[13]} style={{backgroundColor: "#a3a3a3"}} alt="Pottery" onLoad={imageOnLoad}></input>
                                    </div>
                                </div>
                             
                                
                                <div className="dashed-line"></div>
                                <div className="content-container-ninth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(15)} id="btn" type="image" src= {button[15]} style={{backgroundColor: "#a3a3a3"}} alt="Stone Tools" onLoad={imageOnLoad}></input>
                                        <input onClick={() => onFiltering(16)} id="btn" type="image" src= {button[16]} style={{backgroundColor: "#b57c7c"}} alt="Food Producing" onLoad={imageOnLoad}></input>
                                    </div>                    
                                    <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(17)} id="btn" type="image" src= {button[17]} style={{backgroundColor: "#bdb8ad"}} alt="Homo Sapiens" onLoad={imageOnLoad}></input>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>4.000 tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-ten">
                                <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick= {() => onFiltering(18)} id="btn" type="image" src= {button[18]} style={{backgroundColor: "#53625c"}} alt="Megalithic Era" onLoad={imageOnLoad}></input>
                                        <input onClick= {() => onFiltering(19)} id="btn" type="image" src= {button[19]} style={{backgroundColor: "#a3a3a3"}} alt="Bronze Age" onLoad={imageOnLoad}></input> 
                                    </div>
                                </div>
                            </div>
                        </div>

                  
           
            {/* Modal */}

            {modal && <motion.div className="modal" 
                          initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}>
                    <div className="overlay"
                         onClick={toggleModal}></div>

                        <motion.div className="modal-content"
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}>
                            <motion.div className="modal-header">
                                <motion.div className="modal-image">
                                    <img id="modal-animation"src={description[0].button} alt={description[0].name}></img>
                                </motion.div>
                                <motion.div className="modal-title">
                                    <h1>{description[0].name}</h1>
                                    <h3>Periode: {description[0].age}</h3>
                                </motion.div>
                                <motion.div className="modal-button" onClick={toggleModal}>
                                
                                    <div id="mdiv">
                                        <div className="mdiv">
                                            <div className="md"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                                <div className="modal-summary">
                                    <p>{description[0].description} </p>
                                </div>
                                <div className="modal-summary" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                                    <p><i><b>assets:</b> <a href={description[0].link}>{description[0].assets}</a></i></p>
                                </div>
                        </motion.div>
                </motion.div>}
</>       
       
    )
}

export default PrehistoricOfIndonesia