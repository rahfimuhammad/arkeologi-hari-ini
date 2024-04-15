import React from 'react'
import closeButton from "./../../../assets/icon-closeButton.png"
import MuseumLogo from "./../../../assets/icon-museumLogo.png"
import {motion} from "framer-motion"
import { useDetect } from "./../../../hooks/hooks"

const Modal = ({ modal, closeModal }) => {

    const orientation = useDetect()

    return (
            <div 
                style={{position: "fixed", 
                        width: "100%", 
                            height: "100vh", 
                            zIndex: "12", 
                            top: 0, 
                            left: "0",  
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center"}}
            >
                <div 
                    className="modalOverlay" 
                    onClick={closeModal}
                    style={{position: "absolute",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            backgroundColor: "rgba(0, 0, 0, .7)",
                            zIndex: "12"}}
                >
                </div>
                <motion.div 
                        className={orientation? "litografiModal" : "landscapeLitografiModal"} 
                        style={{position: "absolute", zIndex: "13"}}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                >
                    <div className={orientation? "modalTitle" : "landscapeModalTitle"}>
                        <div className="modalTitleWrapper">
                            <h4>{modal.title}</h4>
                        </div>
                        <img 
                            onClick={closeModal} 
                            src={closeButton} 
                            alt="close button" 
                            style={{cursor: "pointer", width: "25px", height: "25px"}}
                        />
                    </div>
                    <div className={orientation? "modal-content-litografi" : "modal-content-litografi-landscape"}>
                        <div className={orientation? "modalImageContainer" : "landscapeModalImageContainer"}>
                            <img 
                                src={modal.image} 
                                alt={modal.title}
                            />
                        </div>
                        <div className={orientation? "modal-description" : "modal-description-landscape"}>
                            <div className={orientation? "litografiSource" : "landscapeLitografiSource"}>
                                <img src={MuseumLogo} alt="logo museum"/>
                                <p style={{fontSize: "14px"}}><b>Publikasi </b>Data belum lengkap</p>
                            </div>
                            <div className={orientation? "modalContent" : "landscapeModalContent"}>
                                <p><b>{modal.litographyAuthor?.author} </b>{modal.description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </div>
    )
}

export default Modal