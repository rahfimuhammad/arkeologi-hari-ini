import "./prehistoricOfIndonesia.css"
import React, { useEffect, useState} from "react";
import {motion} from "framer-motion"
import Navbar from "../../components/Navbar"
import ScrollIcon from "../../assets/icon-scrollIcon.png"
import { useFetch, useDetect } from "../../hooks/hooks";
import { X } from "phosphor-react";


const PrehistoricOfIndonesia = () => {

    const [offSetY, setOffSetY] = useState(0)
    const data = useFetch("https://arkeologihariini.cyclic.app/prehistoric")
    const [description, setDescription] = useState([])
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

    const parallaxSource = [
        {value: 0.4, id: "background"},
        {value: 0.35, id: "mountain"},
        {value: 0.3, id: "jungle0"},
        {value: 0.25, id: "jungle1"},
        {value: 0.20, id: "jungle2"},
        {value: 0.15, id: "jungle3"},
        {value: 0, id: "prehistoricMan"}
    ]

    const parallaxSourceMap = parallaxSource.map((value) => {
        return (
            <div 
                className="parallaxImage" id={value.id}
                style={{transform: `translateY(${offSetY * value.value}px)`}}
            >
            </div>
        )
    })

    // Filtering data by index

    const onFiltering = (index) => {
        try {
            setDescription(data[index])
            setModal(!modal)}
        
        catch (error) { 
            console.log(error)
        }}

    // onModalActive

    useEffect(() => {
        modal? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [modal])

    return (
            <>
                <Navbar/>
                <div className="prehistoricParallaxContainer">
                    <div className={orientation? "prehistoricParallaxWrapperPortrait" : "prehistoricParallaxWrapperLandscape"} >
                        {parallaxSourceMap}
                        <div className={offSetY > 0? "displayNone" : "prehistoricInstruction"} style={{top: orientation? "55vh" : "91vh"}}>
                            <img className= {orientation? "scrollIcon" : "scrollIconLandscape"} src={ScrollIcon} alt="scrollIcon"/>
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
                                        <input onClick={() => onFiltering(0)} id="btn" type="image" src= {data[0]?.button} style={{backgroundColor: "#a3a3a3"}} alt="Paleolitik"></input>
                                        <input onClick={() => onFiltering(1)} id="btn" type="image" src= {data[1]?.button}  style={{backgroundColor: "#d0ddef"}} alt="Nomadeden"></input>
                                        <input onClick={() => onFiltering(2)} id="btn" type="image" src= {data[2]?.button} style={{backgroundColor: "#b57c7c"}} alt="Beburu meramu"></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(3)} id="btn" type="image" src= {data[3]?.button} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Arkaik"></input>
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
                                        <input onClick= {() => onFiltering(4)} id="btn" type="image" src= {data[4]?.button} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Tipik"></input>
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
                                        <input onClick= {() => onFiltering(5)} id="btn" type="image" src= {data[5]?.button} style={{backgroundColor: "#e5e5e5"}} alt="Homo Erectus Progresif"></input>
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
                                        <input onClick= {() => onFiltering(6)} id="btn" type="image" src= {data[6]?.button} style={{backgroundColor: "#dbe2f0"}} alt="Menetap"></input>
                                    </div>
                                    <div className="btn-container" style={{justifyContent: "flex-start"}}>
                                        <input onClick= {() => onFiltering(7)} id="btn" type="image" src= {data[7]?.button} style={{backgroundColor: "#545245"}} alt="Homo Floresiensis"></input>
                                        <div className="btn-container"style={{justifyContent: "flex-end"}}>
                                            <span id="years-container">
                                                <div id="years">
                                                    <p style={{margin: "17px 1px"}}>94.000 tahun yang lalu</p>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashed-line"></div>
                                <div className="content-container-fifth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(8)} id="btn" type="image" src= {data[8]?.button} style={{backgroundColor: "#a3a3a3"}} alt="Alat tulang"></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick= {() => onFiltering(9)} id="btn" type="image" src= {data[9]?.button} style={{backgroundColor: "#2c2b24"}} alt="Homo Wajakensis"></input>
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
                                        <input onClick={() => onFiltering(10)} id="btn" type="image" src= {data[10]?.button} alt="Rock Art" style={{backgroundColor: "#53625c"}}></input>
                                    </div>
                                    <div className="btn-container-middle">
                                    </div>
                                    <div className="btn-container">
                                    </div>
                                </div>
                                <div className="dashed-line"></div>
                                <div className="content-container-seventh" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(11)} id="btn" type="image" src= {data[11]?.button} style={{backgroundColor: "#b57c7c"}} alt="Bercocok tanam"></input>
                                    </div>
                                    <div className="btn-container-middle" style={{justifyContent: "center"}}>
                                        <input onClick={() => onFiltering(12)} id="btn" type="image" src= {data[12]?.button} style={{backgroundColor: "#bdb8ad"}} alt="Australomelanesid"></input>
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
                                        <input onClick={() => onFiltering(14)} id="btn" type="image" src= {data[14]?.button} style={{backgroundColor: "#a3a3a3"}} alt="Pra-Neolitik"></input>
                                        <input onClick= {() => onFiltering(13)} id="btn" type="image" src= {data[13]?.button} style={{backgroundColor: "#a3a3a3"}} alt="Tanah liat"></input>
                                    </div>
                                </div>
                                
                                <div className="dashed-line"></div>
                                <div className="content-container-ninth" style={{justifyContent: "space-between"}}>
                                    <div className="btn-container"style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(15)} id="btn" type="image" src= {data[15]?.button} style={{backgroundColor: "#a3a3a3"}} alt="Neolitik"></input>
                                        <input onClick={() => onFiltering(16)} id="btn" type="image" src= {data[16]?.button} style={{backgroundColor: "#b57c7c"}} alt="Bercocok tanam"></input>
                                    </div>                    
                                    <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick={() => onFiltering(17)} id="btn" type="image" src= {data[17]?.button} style={{backgroundColor: "#bdb8ad"}} alt="Austronesia"></input>
                                        <span id="years-container">
                                            <div id="years">
                                                <p>3.600 tahun yang lalu</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="content-container-ten">
                                <div className="btn-container" style={{justifyContent: "space-between"}}>
                                        <input onClick= {() => onFiltering(18)} id="btn" type="image" src= {data[18]?.button} style={{backgroundColor: "#53625c"}} alt="Megalitik"></input>
                                        <input onClick= {() => onFiltering(19)} id="btn" type="image" src= {data[19]?.button} style={{backgroundColor: "#a3a3a3"}} alt="Zaman logam"></input> 
                                    </div>
                                </div>
                            </div>
                        </div>

            {/* Modal */}

            {modal && <motion.div 
                        className="modal" 
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}>
                    <div 
                        className="overlay"
                        onClick={() => setModal(!modal)}></div>

                        <motion.div className="modal-content"
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}>
                            <div className="modal-header">
                                <div className="modal-image">
                                    <img id="modal-animation"src={description.button} alt={description.name}></img>
                                </div>
                                <div className="modal-title">
                                    <h1>{description.name}</h1>
                                    <h3>Periode: {description.age}</h3>
                                </div>
                                <div className="modal-button" onClick={() => setModal(!modal)}>
                                    <X size={25} color="rgb(109, 106, 106)"/>
                                </div>
                            </div>
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