import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import Grid from "@mui/material/Grid";
import './MyReviews.css';
function MyReviews({ user, houses }) {
  const [reviews, setReviews] = useState([])
  console.log('reviews: ', reviews);
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [reviewEditInput, setReviewEditInput] = useState("");
  const [starEditInput, setStarEditInput] = useState("");

  useEffect(() => {
    fetch(`/reviews/by_user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
  },[user.id])

  // const deleteReview = (review) => {
  //   fetch(`/reviews/${review.id}`,{
  //     method: 'DELETE'
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       handleDeleteReview(data)(reviews.filter((review) => review.id !== data.id));
  //     });
  // };
  // const handleDeleteReview = (data) => {
  //   setReviews(reviews.filter((review) => review.id !== data.id))
  // }

  const renderReviews = reviews.map((review) => {
    return (
      <div className='review'>
        <h3>{houses.map(house => house.id === review.house_id ? house.name : null)}:</h3>
        <ReviewCard
          key={review.id}
          review={review}
          reviewInput={reviewInput}
          setReviewInput={setReviewInput}
          starInput={starInput}
          setStarInput={setStarInput}
          reviewEditInput={reviewEditInput}
          setReviewEditInput={setReviewEditInput}
          setStarEditInput={setStarEditInput}
          starEditInput={starEditInput}
        />
      </div>
    );
  });

  return (
    <div style={{fontFamily: 'Georgia, serif', marginBottom: '10px'}}>
      <div className='reviews-header-div'>
          <h1>MY REVIEWS</h1>
        </div>
        <div className="reviews-container">
          <Grid container style={{ justifyContent: "space-evenly" }}>
            {renderReviews}
          </Grid>
        </div>
      </div>
  );
}
export default MyReviews;