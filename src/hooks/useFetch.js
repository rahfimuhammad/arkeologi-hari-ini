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
                setData(response.data)
            } 
            catch (error) {
            }
        }
      fetchData();

    }, [url]);
    
    return data;
  };

