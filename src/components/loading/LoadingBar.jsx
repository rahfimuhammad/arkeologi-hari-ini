import React from "react";
import Loading from "./Loading";

const LoadingBar = () => {
    return (
        <div style={{position: "absolute",
                    zIndex: "20",
                    width: "100vw",
                    height: "90vh",
                    backgroundColor: "white",
                    top: "10vh",
                    left: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
            <div style={{height: "20vh", width: "20vh", position: "absolute"}}>
                <Loading/>
            </div>
        </div>
        
        
    )
}

export default LoadingBar