import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDetect } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import { MapPin, House } from "phosphor-react";
import Skeleton from 'react-loading-skeleton'
import Modal from "./components/Modal";
import Content from "./components/Content";
import LoadingBar from "../../components/loading/LoadingBar";
import axios from "axios";
import './litografiBatavia.css'
import 'react-loading-skeleton/dist/skeleton.css'

const LitografiBataviaProfile = () => {

    const { id } = useParams()
    const [modal, setModal] = useState([])
    const [toggle, setToggle] = useState(false)
    const orientation = useDetect()
    const [detail, setDetail] = useState([])
    const [author, setAuthor] = useState()
    const [category, setCategory] = useState("batavia")
    const [artworksLoading, setArtworksLoading] = useState(false)
    
    const onGetArtwork = async() => {

        try {
            setArtworksLoading(true)
            let response = await axios.get(
                `https://ark-server-c6b26987c576.herokuapp.com/litography/artworkbyauthor/${id}?category=${category}`
                )
            setDetail(response.data?.data?.artworks)
        } 
        catch (error) {
            console.log(error)
        } finally {
            setArtworksLoading(false)
        }
    }

    const onGetAuthor = async () => {

        try {
            let response = await axios.get(
                `https://ark-server-c6b26987c576.herokuapp.com/litography/author/${id}`
                )
            setAuthor(response.data?.data)
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onGetArtwork()
        window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    useEffect(() => {
        onGetAuthor()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getModal = (index) => {
            setModal(detail[index])
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

    const feedsMap = () => {

        return detail.map((value, index ) => {
            return (
                <Content
                    type={'profile'}
                    value={value}
                    index={index}
                    getModal={getModal}
                    orientation={orientation}
                    key={index}
                />
            )
        })
    }

    return (
        <>
            <div className={orientation? "profileContainer" : "landscapeProfileContainer"}>
                <div 
                    className="navbar-litografi-batavia"
                    style={{position: "fixed",
                            backgroundColor: "white", 
                            zIndex: "10", 
                            top: "0", 
                            left: "0"}}    
                >
                    <div className="navigator-litografi-batavia">
                        <Link to={"/litografi-batavia"} style={{cursor: "pointer"}}>
                            <h3 className="title-litografi-batavia">Litografi</h3>
                        </Link>
                        <div 
                            style={{cursor: "pointer",
                                    fontWeight: "bold",
                                    marginLeft: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    height: "55px",
                                    borderBottom: "2px solid black"}}
                        >
                            <h4>Profile</h4>
                        </div>
                    </div>
                    <Link 
                        to={"/"}
                        className="back-home-litografi-batavia">
                        <House size={22} color="white"/>
                    </Link>
                </div>
                <div className="profile-content-litografi-batavia">
                    <div className="profile-bio-litografi-batavia">
                        <div className="bio-container-litografi-batavia">
                            <img 
                                src={author?.picture || "https://via.placeholder.com/80"}
                                alt="profile" 
                                style={{width: "80px", 
                                        height: "80px",
                                        objectFit: "cover", 
                                        borderRadius: "50%", 
                                        border: "2px solid black"}}
                            />
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <h3>{author?.author || <Skeleton baseColor="#d6d6d6" highlightColor="#bfbfbf" width={200} style={{ borderRadius: '3px' }} />}</h3>
                                <h5>{author?.year || <Skeleton baseColor="#d6d6d6" highlightColor="#bfbfbf" width={200} style={{ borderRadius: '3px' }} />}</h5>
                            </div>
                            <div
                                style={{display: "flex",
                                        alignItems: "center",
                                        gap: "3px"}}
                            >
                                <MapPin size={15} color="#212121"/>
                                <h4>{author?.nationality || <Skeleton baseColor="#d6d6d6" highlightColor="#bfbfbf" width={200} style={{ borderRadius: '3px' }} />}</h4>
                            </div>
                            <div
                                className="bio-story-litografi-batavia"
                                style={{display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        alignItems: "center"}}
                            >
                                <div
                                    style={{display: "flex", 
                                            justifyContent: "center",
                                            padding: "7px 20px",
                                            fontWeight: "bold",
                                            backgroundColor: "#212121",
                                            borderRadius: "25px",
                                            color: "white", 
                                            alignItems: "center"}}
                                >
                                    Story
                                </div>
                                <div
                                    style={{textAlign: "center"}}
                                >
                                    {author?.story || <Skeleton baseColor="#d6d6d6" highlightColor="#bfbfbf" width={200} style={{ borderRadius: '3px' }} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-work-litografi-batavia">
                        <div className="profile-work-nav">
                            <div
                                style={{backgroundColor: category === "batavia" ? "black" : "white",
                                        color: category === "batavia" ? "white" : "black",
                                        cursor: "pointer"}}
                                onClick={() => setCategory("batavia")}
                            >
                                Batavia
                            </div>
                            <div
                                style={{backgroundColor: !category ? "black" : "white",
                                        color: !category ? "white" : "black",
                                        cursor: "pointer"}}
                                onClick={() => setCategory("")}
                            >
                                All Collections
                            </div>
                        </div>
                        {artworksLoading 
                        ? 
                            <div className="loading-litografi-batavia">
                                <LoadingBar size={25}/>
                            </div> 
                        : <div 
                            className="feeds-litografi-batavia"
                            style={{backgroundColor: "transparent"}}      
                        >
                            {feedsMap()}
                        </div>
                        }
                    </div>

                </div>
            </div>
            {toggle && <Modal closeModal={closeModal} modal={modal}/>}
        </>
    )
}

export default LitografiBataviaProfile


