import React from "react";
import './litografiBatavia.css'
import closeButton from "../../assets/icon-closeButton.png"
import MuseumLogo from "../../assets/icon-museumLogo.png"
import ScrollTopButton from "../../assets/icon-scrollTopButton.png"
import Navbar from "../../components/Navbar";
import axios from 'axios'
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { useDetect } from "../../hooks/hooks"



const LitografiBatavia = () => {

    const [data, setData] = useState([])
    const [modal, setModal] = useState([])
    const [toggle, setToggle] = useState(false)
    const orientation = useDetect()
    const [offSetY, setOffSetY] = useState(0)

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */ 
    
    const handleScroll = () => setOffSetY(window.scrollY) 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        
        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

    const onGetData = async() => {

        try {
            let response = await axios.get(
                "https://prehistoric.cyclic.app/litografiBatavia"
                )
            setData(response.data)
        } 
        catch (error) {
        }
    }

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

    useEffect(() => {
        window.scrollTo(0, 0)
        onGetData()
    },[])

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/    

    const mapStory = () => {

        return data.map((value, index) => {
            
            return (
                        <div className={orientation? "storyWrapper" : "landscapeStoryWrapper"} style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Link to={`profile/${data[index].category}`} className={orientation? "storyTest" : "landscapeStoryTest"} style={{backgroundImage: `url(${value.picture})`}}></Link>
                            <p>{value.nickName}</p>
                        </div>
            )
        }) 
    }

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    
    const mapContent = () => {

        return data.length === 0? 
        
        console.log("Wait") :

        data.map((value, index) => {
             
            return (

                value.workBatavia.map((v, i) => {
                    return (

                <div className="litografiImageWrapper" key={index + i} style={{padding: "0 0 1vw 0"}}>
                    <div className= {orientation? "litografiImage" : "landscapeLitografiImage"} 
                         style={{ borderRadius: "1%", backgroundImage: `url(${v.thumbnail})`, backgroundSize: "150% auto", backgroundPosition: "center center", cursor: "pointer"}}
                         onClick={() => getModal(index, i)}></div>
                    <div className={orientation? "caption" : "landscapeCaption"} style={{padding: "1vw 0 0 0", display: "flex", flexDirection: "column"}}>
                            <Link to={`profile/${data[index].category}`} className="litografiAuthor"><h1>{value.author}</h1></Link>
                            <div className="litografiTitle"><p>{v.title}</p></div>
                    </div>
                </div>
                    )
                })
            )
        })
    }

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

    const getModal = (parent, child) => {

        setModal(data[parent].workBatavia[child])
        setToggle(!toggle)
        }

    let closeModal = () => {
        setModal([])
        setToggle(!toggle)
        }

        useEffect(() => {
        
            if (toggle) {
              document.body.style.overflow = 'hidden'}
            else {
                document.body.style.overflow = 'unset'}
          }, [toggle])

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

    return (
        <>
            <Navbar/>
            <div className="litografiBataviaMain" style={{padding: "0 0 20px 0"}}>
                <div className={orientation? "story" : "landscapeStory"} style={{position: "relative", width: "95%", height: "fit-content", overflowX: "auto", overflowY: "hidden", zIndex: "11", scrollbarWidth: "none"}}>
                    <div style={{position: "relative", width: "fit-content", height: "fit-content", display: "flex", flexDirection: "row", scrollbarWidth: "2px", whiteSpace: "nowrap" }}>
                        {mapStory()}
                    </div>
                </div>
                <div className={orientation? "litografiBataviaContainer" : "landscapeLitografiBataviaContainer"}>
                    {mapContent()}
                </div>
                <div className={offSetY > 120? orientation? "scrollTopButton" : "landscapeScrollTopButton" : ""} 
                     style={{position: "fixed",
                             cursor: "pointer",
                             opacity: "0",
                             scale: "0", 
                             backgroundImage: `url(${ScrollTopButton})`, 
                             backgroundPosition: "center center", 
                             backgroundSize: "100% auto"}}
                     onClick={() => window.scrollTo(0, 0)}>
                </div>
            {toggle &&             
                <div style={{position: "fixed", width: "100%", 
                            height: "100vh", zIndex: "12", 
                            top: 0, left: "0", right: "0", 
                            bottom: "0", display: "flex", 
                            justifyContent: "center", alignItems: "center"}}>
                    <div className="modalOverlay" 
                                    onClick={closeModal}
                                    style={{position: "absolute",
                                            top: "0",
                                            bottom: "0",
                                            left: "0",
                                            right: "0",
                                            backgroundColor: "rgba(0, 0, 0, .7)",
                                            zIndex: "12"}}>
                    </div>

                <motion.div className={orientation? "litografiModal" : "landscapeLitografiModal"} 
                     style={{position: "absolute", zIndex: "13"}}
                     initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}>
                    <div className={orientation? "modalTitle" : "landscapeModalTitle"}>
                        <div className="modalTitleWrapper">
                            <h1>{modal.title}</h1>
                        </div>
                        <img onClick={closeModal} src={closeButton} style={{cursor: "pointer"}}/>
                    </div>
                    <div className={orientation? "test" : "landscapeTest"}>
                        <div className={orientation? "modalImageContainer" : "landscapeModalImageContainer"}>
                            <img src={modal.thumbnail}/>
                        </div>
                        <div className={orientation? "test2" : "landscapeTest2"}>
                            <div className={orientation? "litografiSource" : "landscapeLitografiSource"}>
                                <img src={MuseumLogo} alt="logo museum"/>
                                <p><b>Koleksi asli di </b>{modal.source}</p>
                            </div>
                            <div className={orientation? "modalContent" : "landscapeModalContent"}><p><b>{modal.author} </b>{modal.description}</p></div>
                        </div>
                    </div>
                    
                </motion.div>
                </div>
                }
            </div>
        </>
    )
}

export default LitografiBatavia

