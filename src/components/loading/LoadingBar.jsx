import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const LoadingBar = ({size, height}) => {
    return (
        <div style={{ width: "100%",
                    height: height || "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent"}}>
            <TailSpin visible={true}
                    height="32"
                    width="32"
                    color="#7b8b8b"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""/>
        </div>
    )
}

export default LoadingBar