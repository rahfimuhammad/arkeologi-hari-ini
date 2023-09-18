import React from "react";
import "./litografiBatavia.css"
import Navbar from "../components/Navbar";
import axios from 'axios'
import {useState, useEffect} from "react"

const LitografiBatavia = () => {

    const [data, setData] = useState([])
    const [description, setDescription] = useState([])

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

    useEffect(() => {
        onGetData()
    }, [])


    let onFiltering = async(index) => {
        try {
            let responseDescription = await axios.get(
                `https://prehistoric.cyclic.app/litografiBatavia?id=${index}`
                )
            setDescription(responseDescription.data)
            console.log(description)
        } catch (error) {
            
        }
    }


    const mapContent = () => {

        return data.length === 0? 

            <div>Content not found</div> :

        data.map((value, index) => {
            // console.log(value.source)
            return (
               
                <div className="litografiImageWrapper" key={index}>
                    <div className="litografiImage" onClick={() => onFiltering(index)}alt={value.title} style={{backgroundImage: `url(${value.source})`,
                                                                              backgroundSize: "100% auto", 
                                                                              backgroundPosition: "center center", 
                                                                              borderRadius: "2%"}}>
                    </div>
                </div>
            )
        })
    }



    return (
        <>
            <Navbar/>
            <div className="litografiBataviaMain">
                <div className="litografiBataviaContainer">
                    {mapContent()}
                </div>
            </div>
            <div className="litografiOverlay">
                <div className="litografiModal"></div>
            </div>
        </>
    )
}

export default LitografiBatavia