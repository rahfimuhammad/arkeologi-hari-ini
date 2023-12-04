import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/hooks'
import "./museumReview.css"
import Navbar from "../../components/Navbar"
import { FaStar } from 'react-icons/fa'
import Grid from "../../assets/grid.svg"

const MuseumListPage = () => {
  
    const data = useFetch("https://museumreview.onrender.com/museum")
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
      window.scrollTo(0, 0);
  
      if (data && data.length > 0) {
        // Menghitung rata-rata rating dari semua ulasan
        const totalRating = data.reduce((sum, value) => sum + value.rate.reduce((acc, curr) => acc + curr, 0), 0);
        const avgRating = totalRating / data[0].rate.length; // Membagi dengan total jumlah rating
        setAverageRating(() => avgRating); // Menggunakan functional update
      }
    }, [data]);

  return (
    <div>
      <Navbar/>
      <div className="museum-main" style={{backgroundImage: `url(${Grid})`, backgroundRepeat: "repeat", backgroundSize: "100px auto", minHeight: "100vh"}}>
        <div className="card-container">
          {data === undefined? "" : data.map((value, index) => (
              <Link to={`review-museum/${data[index].id}`}>
                <div key={value.id} className="card-museum">
                  <div className="card-image" style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={value.logo} style={{height: "95%", width: "auto"}}/>
                  </div>
                  <div className="card-content" style={{padding: "2%"}}>
                    <h1 className='title-museum' style={{color: "#101626"}}>{value.name}</h1>
                    <h2 className='location-museum'>Jakarta, Indonesia</h2>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                      <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
                          {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                            <label key={ratingValue}>
                              <input type="radio" name="rating" value={ratingValue} checked={0}/>
                              <FaStar className='stars-user' color={0 <= i? "#e4e5e9" : "#ffc107" }/>
                            </label>
                          ))}
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                          <p className='info-rating'>
                          <b>{value.rate[0] > 0
                          ? `${averageRating.toFixed(1)}`
                          : '0'}</b>
                          </p>
                          <p className='info-rating' style={{padding: "0"}}>{value.rate?.length >= 2? `${value.rate?.length} ratings` : `${value.rate?.length} rating`}</p>
                        </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MuseumListPage;