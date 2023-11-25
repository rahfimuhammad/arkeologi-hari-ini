import "./prehistoricOfIndonesia.css"
import React, { useEffect, useState} from "react";
import {motion} from "framer-motion"
import Navbar from "../components/Navbar"
import ScrollIcon from "../assets/icon-scrollIcon.png"
import { useFetch, useDetect } from "../hooks/hooks";


const PrehistoricOfIndonesia = () => {

    const [offSetY, setOffSetY] = useState(0)
    const data = useFetch("https://prehistoric.cyclic.app/prehistoric")
    const [description, setDescription] = useState([])
    const [button, setButton] = useState([])
    const [modal, setModal] = useState(false)
    const orientation = useDetect()

    // Parallax Scroll Handle and useEffect
    
    const handleScroll = () => setOffSetY(window.scrollY)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        
        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Filtering data from by index

    let onFiltering = async(index) => {
        try {
            setDescription(data[index])
            setModal(!modal)}
        
        catch (error) {   }}

    // Modal Handle Button

    let toggleModal = () => {
        setDescription([])
        setModal(!modal)
    }

    useEffect(() => {
        
        modal? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
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

    return (
<>
<Navbar/>
                <div className="prehistoricParallaxContainer">
                    <div className={orientation? "prehistoricParallaxWrapperPortrait" : "prehistoricParallaxWrapperLandscape"} >
                        <div className="parallaxImage" id="background"
                        style={{transform: `translateY(${offSetY * 0.4}px)`, zIndex: "0" }}
                        ></div>
                        <div className="parallaxImage"  id="mountain"
                        style={{transform: `translateY(${offSetY * 0.35}px)` }}
                        ></div>
                        <div className="parallaxImage"  id="jungle0"
                        style={{transform: `translateY(${offSetY * 0.3}px)` }}
                        ></div>
                        <div className="parallaxImage"  id="jungle1"
                        style={{transform: `translateY(${offSetY * 0.25}px)` }}
                        ></div>
                        <div className="parallaxImage"  id="jungle2"
                        style={{transform: `translateY(${offSetY * 0.2}px)` }}
                        ></div>
                        <div className="parallaxImage"  id="jungle3"
                        style={{transform: `translateY(${offSetY * 0.15}px)` }}
                        ></div>
                        <div className="parallaxImage"  id="prehistoricMan"
                        ></div>
                        <div className={offSetY > 0? "displayNone" : "prehistoricInstruction"} style={{top: orientation? "55vh" : "91vh"}}>
                            <img className= {orientation? "scrollIcon" : "scrollIconLandscape"} src={ScrollIcon}/>
                        </div>
                    </div>
                </div>
                    

                <div className="prehistoricMainContainer" id= {orientation? "portraitContainer" : "landscapeContainer"}>
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
                                        <input onClick={() => onFiltering(0)} id="btn" type="image" src= {button[0]} style={{backgroundColor: "#a3a3a3"}} alt="Stone Tools"></input>
                                        <input onClick={() => onFiltering(1)} id="btn" type="image" src= {button[1]}  style={{backgroundColor: "#d0ddef"}} alt="Nomadic"></input>
                                        <input onClick={() => onFiltering(2)} id="btn" type="image" src= {button[2]} style={{backgroundColor: "#b57c7c"}} alt="Hunting and Gathering"></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(3)} id="btn" type="image" src= {button[3]} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Arkaik"></input>
                                    </div>
                                    <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>1,8 juta tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="dashed-line" style={{width: "49%"}}></div>
                                <div className="content-container-second" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"></div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(4)} id="btn" type="image" src= {button[4]} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Tipik"></input>
                                    </div>
                                    <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>0,75 juta tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="dashed-line" style={{width: "49%"}}></div>
                                <div className="content-container-third" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"></div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(5)} id="btn" type="image" src= {button[5]} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Progresif"></input>
                                    </div>
                                    <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>0,25 juta tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-fourth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(6)} id="btn" type="image" src= {button[6]} style={{backgroundColor: "#dbe2f0"}} alt="Settling"></input>
                                    </div>
                                    <div className="btn-container" style={{justifyContent: "flex-start"}}>
                                        <input onClick= {() => onFiltering(7)} id="btn" type="image" src= {button[7]} style={{backgroundColor: "#545245"}} alt="Homo Floresiensis"></input>
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
                                        <input onClick= {() => onFiltering(8)} id="btn" type="image" src= {button[8]} style={{backgroundColor: "#a3a3a3"}} alt="Bone-Tool"></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(9)} id="btn" type="image" src= {button[9]} style={{backgroundColor: "#2c2b24"}} alt="Homo Wajakensis"></input>
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
                                        <input onClick={() => onFiltering(10)} id="btn" type="image" src= {button[10]} alt="Rock Art" style={{backgroundColor: "#53625c"}}></input>
                                    </div>
                                    <div className="btn-container-middle">
                                    </div>
                                    <div className="btn-container">
                                    </div>
                                </div>
                                <div className="dashed-line"></div>
                                <div className="content-container-seventh" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(11)} id="btn" type="image" src= {button[11]} style={{backgroundColor: "#b57c7c"}} alt="Food Producing"></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(12)} id="btn" type="image" src= {button[12]} style={{backgroundColor: "#bdb8ad"}} alt="Homo Sapiens"></input>
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
                                        <input onClick={() => onFiltering(14)} id="btn" type="image" src= {button[14]} style={{backgroundColor: "#a3a3a3"}} alt="Stone Tools"></input>
                                        <input onClick= {() => onFiltering(13)} id="btn" type="image" src= {button[13]} style={{backgroundColor: "#a3a3a3"}} alt="Pottery"></input>
                                    </div>
                                </div>
                             
                                
                                <div className="dashed-line"></div>
                                <div className="content-container-ninth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(15)} id="btn" type="image" src= {button[15]} style={{backgroundColor: "#a3a3a3"}} alt="Stone Tools"></input>
                                        <input onClick={() => onFiltering(16)} id="btn" type="image" src= {button[16]} style={{backgroundColor: "#b57c7c"}} alt="Food Producing"></input>
                                    </div>                    
                                    <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(17)} id="btn" type="image" src= {button[17]} style={{backgroundColor: "#bdb8ad"}} alt="Homo Sapiens"></input>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>3.600 tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-ten">
                                <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick= {() => onFiltering(18)} id="btn" type="image" src= {button[18]} style={{backgroundColor: "#53625c"}} alt="Megalithic Era"></input>
                                        <input onClick= {() => onFiltering(19)} id="btn" type="image" src= {button[19]} style={{backgroundColor: "#a3a3a3"}} alt="Bronze Age"></input> 
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
                                    <img id="modal-animation"src={description.button} alt={description.name}></img>
                                </motion.div>
                                <motion.div className="modal-title">
                                    <h1>{description.name}</h1>
                                    <h3>Periode: {description.age}</h3>
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
                                    <p>{description.description} </p>
                                </div>
                                <div className="modal-summary" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                                    <p><i><b>assets:</b> <a href={description.link}>{description.assets}</a></i></p>
                                </div>
                        </motion.div>
                </motion.div>}
</>       
       
    )
}

export default PrehistoricOfIndonesia