import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useFetch } from '../hooks/hooks';

const ReviewMuseumPage = () => {

  const {id} = useParams()
  const index = parseInt(id)
  const museumData = useFetch(`https://prehistoric.cyclic.app/museum/${index}`)
  const data = museumData.reviews

  // const museumIndex = match.params.index;
  // const selectedMuseum = museums[museumIndex];
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
      const response = await axios.post(`https://prehistoric.cyclic.app/museum/${index}/reviews`, {
        user: formData.user,
        rating: parseInt(formData.rating),
        review: formData.review,
      });

      // Di sini, Anda mungkin ingin menangani respons dari server, seperti memperbarui tampilan dengan ulasan yang baru ditambahkan.

      console.log('Review berhasil ditambahkan:', response.data);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <>
      <h1>{museumData.name}</h1>
      <p>{museumData.description}</p>

      <h2>Ulasan</h2>
      <ul>
        {museumData.reviews === undefined? console.log('wait') : museumData.reviews.map((review, index) => (
          <li key={index}>
            <p>User: {review.user}</p>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
          </li>
        ))}
      </ul>

      <h2>Tambahkan Ulasan</h2>
      <form>
        <label>
          User:
          <input type="text" name="user" value={formData.user} onChange={handleInputChange} />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} />
        </label>
        <label>
          Review:
          <textarea name="review" value={formData.review} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddReview}>
          Tambahkan Ulasan
        </button>
      </form>
    </>
  );
};

export default ReviewMuseumPage;