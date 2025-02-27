import React from 'react'
import { Link } from 'react-router-dom'
import { User, PaintBrushBroad } from 'phosphor-react'

const Content = ({value, index, getModal, orientation, type}) => {

    const profileNavigtation = () => {
        if(type === 'home') {
            return (
                <Link to={`profile/${value.litographyAuthorId}`} className="litografiAuthor" id='helloworld!'>
                    <User size={15} color="#212121"/>
                    <h4>{value.litographyauthor?.author}</h4>
                </Link>
            )
        } else {
            return (
                <div className="litografiAuthor">
                    <User size={15} color="#212121"/>
                    <h4>{value.litographyauthor?.author}</h4>
                </div>
            )
        }
    }
    
    return (
            <div className="litografi-container">
                <div  
                    style={{borderRadius: "5%", 
                            width: "100%",
                            aspectRatio: "4/3",
                            backgroundColor: "#d6d6d6",
                            backgroundImage: `url(${value.image})`, 
                            backgroundSize: "150% auto", 
                            backgroundPosition: "center center", 
                            cursor: "pointer"}}
                    onClick={() => getModal(index)}>
                </div>
                <div 
                    className={orientation? "caption" : "landscapeCaption"} 
                    style={{display: "flex", 
                            flexDirection: "column"}}
                >
                    {profileNavigtation()}
                    <div className="litografiTitle">
                        <PaintBrushBroad size={15} color="#212121" />
                        <p>{value.title}</p>
                    </div>
                </div>
            </div>
    )
}

export default Content