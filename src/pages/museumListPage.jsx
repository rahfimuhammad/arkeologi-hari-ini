import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MuseumListPage = () => {

  const [data, setData] = useState([])

  
  const onGetData = async() => {

    try {
        let response = await axios.get(
            "https://prehistoric.cyclic.app/museum"
            )
        setData(response.data)
    } 
    catch (error) {
    }
}

useEffect(() => {
  window.scrollTo(0, 0)
  onGetData()
},[])

  return (
    <div>
      <h1>Daftar Museum</h1>
      <ul>
        {data === undefined? "" : data.map((value, index) => (
          <li key={index}>
            <Link to={`review-museum/${data[index].id}`}>{value.name}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => console.log(data)} style={{backgroundColor: "black", width: "50px", height: "50px"}}></div>
    </div>
  );
};

export default MuseumListPage;