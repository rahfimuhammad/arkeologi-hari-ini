import React, {useState, useEffect} from "react";
import './litografiBatavia.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useDetect } from "../../hooks/hooks"
import { MagnifyingGlass, House, PaintBrush, CaretRight, CaretLeft } from "phosphor-react";
import Modal from "./components/Modal";
import Content from "./components/Content";
import LoadingBar from "../../components/loading/LoadingBar";

const LitografiBatavia = () => {

    const [artworks, setArtworks] = useState([])
    const [authors, setAuthors] = useState([])
    const [modal, setModal] = useState([])
    const [toggle, setToggle] = useState(false)
    const orientation = useDetect()
    const [sideToggle, setSideToggle] = useState(false)
    const [category, setCategory] = useState("batavia")
    const [search, setSearch] = useState("")
    const [authorLoading, setAuthorLoading] = useState(false)
    const [artworksLoading, setArtworksLoading] = useState(false)

    const onGetArtworks = async() => {

        try {
            setArtworksLoading(true)
            let response = await axios.get(
                `https://arkeologihariini.cyclic.app/litography/artwork?category=${category}&search=${search}`
                )
            setArtworks(response.data?.data?.artworks)
        } 
        catch (error) {
            console.log(error)
        } finally {
            setArtworksLoading(false)
        }
    }

    const onGetAuthors = async() => {

        try {
            setAuthorLoading(true)
            let response = await axios.get(
                'https://arkeologihariini.cyclic.app/litography/authors'
                )
            setAuthors(response.data?.data)
        } 
        catch (error) {
            console.log(error)
        } finally {
            setAuthorLoading(false)
        }
    }

    useEffect(() => {
        onGetAuthors()
    },[])

    useEffect(() => {
        onGetArtworks()
    },[category, search])   

    const mapStory = () => {

        return authors.map((value, index) => {
            
            return (
                        <Link 
                            to={`profile/${value.id}`} 
                            className="artists-story" key={index}
                        >
                            <div  
                                className='artists-profile-picture'
                                style={{backgroundImage: `url(${value.picture})`}}
                            >
                            </div>
                            <div
                                style={{display: "flex", 
                                        flexDirection: "column",
                                        width: "calc(100% - 67px)", 
                                        gap: "2px"}}
                            >
                                <h4>
                                    {value.nickname}
                                </h4>
                                <p className="proffession"> 
                                    {value.proffession}
                                </p>
                            </div>
                        </Link>
            )
        }) 
    }
    
    const mapContent = () => {
        
        return artworks.map((value, index) => {
            return (
                <Content
                    value={value}
                    index={index}
                    getModal={getModal}
                    orientation={orientation}
                />
            )
        })
    }

    const getModal = (index) => {

        setModal(artworks[index])
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
        <div className="layout-litografi-batavia">
            <div className="navbar-litografi-batavia">
                <div className="navigator-litografi-batavia">
                    <h3 className="title-litografi-batavia">Litografi</h3>
                    <div 
                        style={{marginLeft: "10px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                height: "55px",
                                borderBottom: `${category === "batavia" ? "2px solid black" : "2px solid transparent"}`}} 
                        onClick={() => setCategory("batavia")}
                    >
                        <h5>Batavia</h5>
                    </div>
                    <div 
                        style={{cursor: "pointer",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                height: "55px",
                                borderBottom: `${!category? "2px solid black" : "2px solid transparent"}`}}
                        onClick={() => setCategory("")}
                    >
                        <h5>All Collections</h5>
                    </div>
                </div>
                <Link 
                    to={"/"}
                    className="back-home-litografi-batavia">
                    <House size={22} color="white"/>
                </Link>
            </div>
            {sideToggle && <div className="sidebar-overlay"></div>}
            <div className="main-content-litografi">
                <div className={`sidebar ${sideToggle ? "active" : ""}`}>
                    <div 
                        className='toggle-sidebar'
                        onClick={() => setSideToggle(!sideToggle)}
                        style={{width: "50px",
                                height: "50px",
                                zIndex: "3",
                                position: "absolute",
                                top: "calc(50% - 25px)",
                                borderRadius: "50%",
                                right: "-25px"}}
                    >
                        <CaretRight 
                            style={{position: "absolute", 
                                    top: "calc(50% - 10px)", 
                                    left: "calc(100% - 25px"}} 
                            size={20} 
                            color='white' 
                        />
                        <CaretLeft 
                            style={{position: "absolute", 
                                    top: "calc(50% - 10px)", 
                                    right: "calc(100% - 25px"}} 
                            size={20} 
                            color='white' 
                        />
                    </div>
                    <div
                        style={{display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                width: "calc(100% - 100px)",
                                padding: "10px 50px 0 50px"}}  
                    >
                        <div
                            style={{display: "flex",
                                    gap: "10px",
                                    width: "100%",
                                    padding: "10px 0",
                                    borderBottom: "1px solid #cccccc",
                                    alignItems: "center"}}  
                        >
                            <PaintBrush size={25}/>
                            <h3>Artists</h3>
                        </div>
                    </div>
                    {
                    authorLoading
                    ? <LoadingBar size={25}/> 
                    :<div className="story-litografi-batavia">
                        { mapStory()}
                    </div>
                    }
                </div>
                <div className="content-container-litografi-batavia">
                    <div className="searchbar-litografi-batavia">
                        <div className="searchbar-container-litografi-batavia">
                            <MagnifyingGlass size={20}/>
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search lithography"
                                className="searchbar-input-litografi-batavia"
                                style={{border: "none",
                                        outline: "none",
                                        width: "100%",
                                        backgroundColor: "transparent",
                                        height: "32px"}}
                            />
                        </div>
                    </div>
                    {
                    artworksLoading
                    ? <LoadingBar size={25}/> 
                    :<div className="content-litografi-batavia">
                        {mapContent()}
                    </div>
                    }
                </div>
            </div>
            {toggle && <Modal closeModal={closeModal} modal={modal}/>}
        </div>
        </>    
    )
}

export default LitografiBatavia

