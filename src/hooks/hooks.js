import axios from "axios"
import { useState, useEffect } from "react"

export const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async() => {

            try {
                let response = await axios.get(
                    url
                    )
                setData(response?.data?.data)
            } 
            catch (error) {
                console.log('error')
            }
        }
      fetchData();

    }, [url]);
    
    return data;
    };

export const useDetect = () => {
    const [orientation, setOrientation] = useState(null)

    useEffect(() => {
        const detectOrientation = () => {
            
            window.innerHeight > window.innerWidth?
                
            setOrientation(true) : setOrientation(false)
            window.addEventListener('resize', detectOrientation)
            }
            detectOrientation()
        }, []);

    return orientation       
    };

