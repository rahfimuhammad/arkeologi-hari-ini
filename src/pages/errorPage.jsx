import React from 'react'
import Error from '../assets/error.svg'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <div
                style={{
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    color: "#212121",
                }}
            >
                <img 
                    src={Error} 
                    alt="error" 
                    style={{
                        width: "220px",
                        height: "auto",
                    }}    
                />
                <h3>Something went wrong</h3>
                <button
                    style={{
                        padding: "10px 20px",
                        borderRadius: "5px",
                        border: "none",
                        background: "#595667",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bolder",
                    }}
                onClick={() => navigate('/')}>Back to home</button>
            </div>
        </div>
    )
}

export default ErrorPage