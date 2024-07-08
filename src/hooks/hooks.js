import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchData = async() => {

            try {
                setLoading(true)
                let response = await axios.get(
                    url
                    )
                setData(response?.data?.data)
            } 
            catch (error) {
                navigate('/error')
            } finally {
                setLoading(false)
            }
        }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    
    return {data, loading};
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

