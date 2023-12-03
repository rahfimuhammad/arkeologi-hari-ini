import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import {motion} from "framer-motion"
import { useFetch, useDetect } from '../hooks/hooks';
import "./museumReview.css"
import { FaStar } from 'react-icons/fa'
import CloseButton from "../assets/icon-closeButton.svg"
import MuseumLogo from "../assets/museum-logo.svg"

const ReviewMuseumPage = () => {
  const { id } = useParams()
  const index = parseInt(id)
  const museumData = useFetch(`https://museumreview.onrender.com/museum/${index}`)
  const data = museumData.reviews
  const [toggle, setToggle] = useState(false)
  const [hover, setHover] = useState(null)
  const orientation = useDetect()

  const [formData, setFormData] = useState({
    user: '',
    rating: '',
    review: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddReview = async () => {
    try {
      let postData = {};

      // Jika ada ulasan
      if (formData.review && formData.user && formData.rating) {
        postData = {
          user: formData.user,
          review: formData.review,
          rating: parseInt(formData.rating),
        };

        // Lakukan post untuk ulasan
        const reviewResponse = await axios.post(`https://museumreview.onrender.com/museum/${index}/reviews`, postData);

        // Di sini, Anda mungkin ingin menangani respons dari server untuk ulasan
        // console.log('Ulasan berhasil ditambahkan:', reviewResponse.data);
        // alert("Succesed")
        setToggle(!toggle)
      }

      // Jika hanya ada rating
      if ((formData.rating && (!formData.review && !formData.user)) || formData.review && formData.user && formData.rating ) {
        const rateData = {
          rating: parseInt(formData.rating),
        };

        // Lakukan post untuk rating
        const rateResponse = await axios.post(`https://museumreview.onrender.com/museum/${index}/rate`, rateData);

        // Di sini, Anda mungkin ingin menangani respons dari server untuk rating
        setToggle(!toggle)
        // console.log('Rating berhasil ditambahkan:', rateResponse.data);
        alert("Succesed")
      }
    } catch (error) {
      console.error('Error adding review/rating:', error);
    }
  };

  const mapReview = () => {
    return data === undefined ? console.log('wait') :
      data.map((review, index) => {
        return (
          <div key={index} className="review-container">
            <h2>{review.user}</h2>
            <p>{review.review}</p>
            <div
                style={{
                  display: "flex",
                  gap: "5px",
                  padding: "10px 0 5px 0"
                }}
              >
                {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                  <label key={ratingValue}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      checked={review.rating}
                      style={{ height: "20%" }}
                    />
                    <FaStar className='stars-user' color={review.rating <= i? "#e4e5e9" : "#ffc107" }/>
                  </label>
                ))}
              </div>
          </div>
        )
      }
      )
  }

  // useEffect(() => {
  //   mapReview()
  // }, [data])

  return (
    <>
      <Link to="/museum-list"><img src={`${MuseumLogo}`} style={{height: orientation? "6vh" : "10vh", width: "auto", position: "absolute", top: "1vh", left: "1vh"}}/></Link>
      <div className="reviews-content-container" style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: "20px", padding: "0 0 20px 0"}}>
        <div className='reviews-container' style={{display: "flex"}}>
            <div className='museum-pict' style={{backgroundColor: "black", borderRadius: "50%"}}></div>
            <div className="desc-museum" style={{display: "flex", flexDirection: "column"}}>
              <h1 style={{width: "fit-content"}}>{museumData.name}</h1>
              <h2 onClick={() => console.log(museumData.reviews.length)}>{museumData.location}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo illo nostrum eveniet similique ipsum natus tempore. Deleniti temporibus sed amet?</p>
            </div>
        </div>
        <div style={{ width: "fit-content", display: "flex", padding: "15px 0", gap: "20px", alignItems: "center"}}>
                <div style={{width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div
                style={{
                  display: "flex",
                  gap: "5px",
                  padding: "10px 0 5px 0"
                }}
              >
                {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                  <label key={ratingValue}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      checked={4}
                      style={{ height: "20%" }}
                    />
                    <FaStar size={23} className='stars-user' color={4 <= i? "#e4e5e9" : "#ffc107" }/>
                  </label>
                ))}
              </div>
              <p>{museumData.rate?.length} rating</p>
                </div>
                <div style={{height: "fit-content", display: "flex", justifyContent: "center", padding: "15px 45px", backgroundColor: "#101626"}}><h2 style={{color: "white"}} onClick={() => setToggle(!toggle)}>REVIEW</h2></div>
              </div>
        <div className='user-review' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h2>{museumData.reviews?.length} Ulasan</h2>
            <div className="review-wrapper">
              {mapReview()}
          </div>
        </div>
      </div>

      {toggle && <motion.div className="modal-review-overlay" style={{ position: "fixed", top: "0", left: "0", zIndex: "15", width: "100%", height: "100vh", backgroundColor: "rgba(0, 0, 0, .8", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="close" onClick={() => setToggle(!toggle)} style={{ width: "100%", height: "100vh", position: "absolute", top: "0", left: "0", zIndex: "15" }}></div>
        <motion.div className="modal-review" id={orientation? "mr-portrait" : "mr-landscape" } style={{ zIndex: "16", position: "absolute", top: orientation? "15vh" : "" }} 
                    initial={{
                        scale: 0
                          }}
                    animate={{
                        scale: 1
                    }}>
          <div onClick={() => setToggle(!toggle)} style={{width: "7%", height: "7%", position:"absolute", top: "-3.5%", right: "-3.5%", backgroundImage: `url(${CloseButton})`, backgroundSize: "100% 100%"}}></div>
          <form style={{ display: "flex", flexDirection: "column", gap: "25px", padding: "3px" }}>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
              <h1 style={{textAlign: "center", color: "#101626"}}>{museumData.name}</h1>
            </div>
            {/* Mengganti input number dengan radio button */}
            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                  <label key={ratingValue}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      checked={parseInt(formData.rating) === ratingValue}
                      onChange={handleInputChange}
                      style={{ height: "20%" }}
                    />
                    <FaStar onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} className='stars' color={(hover || formData.rating) <= i? "#101626" : "#ffc107" }/>
                  </label>
                ))}
              </div>
              {/* ... */}
            <div style={{position:"relative", width: "100%", height: "60%", display: "flex", flexDirection: "column", gap: "5px"}}>
              <input style={{fontFamily: "sans-serif", width: "50%", fontSize: "20px"}} placeholder='name' type="text" name="user" value={formData.user} onChange={handleInputChange} />
              <textarea style={{fontFamily: "sans-serif", fontSize: "20px", width: "calc(100% - 10px)", height: "70%"}} placeholder='write a review...' name="review" value={formData.review} onChange={handleInputChange} />
            </div>
            <div style={{position: "relative", width: "100%", display: "flex", justifyContent: "flex-end", height: "30%", alignItems: "flex-end"}}>
              <button style={{width: "35%", height: "65%"}} type="button" onClick={handleAddReview}>
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>}
    </>
  );
};

export default ReviewMuseumPage;
