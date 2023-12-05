import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/hooks'
import "./museumReview.css"
import Navbar from "../../components/Navbar"
import { FaStar } from 'react-icons/fa'
import Grid from "../../assets/grid.svg"
import LoadingBar from "../../components/loading/LoadingBar";

const MuseumListPage = () => {
  
  const data = useFetch('https://museumreview.onrender.com/museum');
  const [averageRatings, setAverageRatings] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Menghitung rata-rata rating dari setiap museum
      const avgRatings = data.map((museum) => {
        const totalRating = museum.rate.reduce((acc, curr) => acc + curr, 0);
        return totalRating / museum.rate.length;
      });

      setAverageRatings(avgRatings);
    }
  }, [data]);

  return (
    <div>
      <Navbar/>
      <div className="museum-main" style={{backgroundImage: `url(${Grid})`, backgroundRepeat: "repeat", backgroundSize: "100px auto", minHeight: "100vh"}}>
        <div className="card-container">
          {data === undefined ? (
           <div><LoadingBar /></div>) : (
            data.map((museum, index) => (
              <Link to={`review-museum/${museum.id}`} key={museum.id}>
                <div className="card-museum">
                  <div className="card-image" style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={museum.logo} style={{height: "95%", width: "auto"}}/>
                  </div>
                  <div className="card-content" style={{padding: "2%"}}>
                    <h1 className='title-museum' style={{color: "#101626"}}>{museum.name}</h1>
                    <h2 className='location-museum'>Jakarta, Indonesia</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                        <label key={ratingValue}>
                          <input type="radio" name="rating" value={ratingValue} defaultChecked={averageRatings[index] === ratingValue} />
                          <FaStar className="stars-user" color={ratingValue <= Math.round(averageRatings[index]) ? '#ffc107' : '#e4e5e9'} />
                        </label>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <p className="info-rating">
                          <b>
                            {averageRatings[index] > 0
                            ? `${averageRatings[index].toFixed(1)}`
                            : '0'}
                          </b>
                        </p>
                        <p className="info-rating" style={{ padding: '0' }}>
                            {museum.rate?.length >= 2
                            ? `${museum.rate?.length} ratings`
                            : `${museum.rate?.length} rating`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
                  ))
                )}
            </div>
        </div>
    </div>
  );
};

export default MuseumListPage;

