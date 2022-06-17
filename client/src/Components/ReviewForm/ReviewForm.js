import React, { useState } from "react";

function ReviewForm({
  reviews,
  setReviews,
  house_id,
  user_id
}) {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const newReview = {
    content: reviewInput,
    rating: parseInt(starInput), 
    house_id: house_id,
    user_id: user_id,
  };
  
  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newReview),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/reviews`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        setStarInput(" ");
        setReviewInput(" ");
        setReviews([...reviews, data]);
      });
  };

  console.log(starInput);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='reviewText'> Leave a review! </div>
    
      <input
        className='inputReview'
        type="integer"
        value={starInput}
        placeholder="Star Rating"
        onChange={(e) => setStarInput(e.target.value)}
        style={{borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', width: '49%',}}
      />
      <textarea
        className='inputReview'
        type="textarea"
        value={reviewInput}
        placeholder="Review..."
        onChange={(e) => setReviewInput(e.target.value)}
        style={{textAlign: 'center', width: '49%', marginLeft: '25.5%'}}
      />
      <button style={{width: '10%', backgroundColor:'black', color:'white', cursor:'pointer',transform: 'skew(-10deg)'}} onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default ReviewForm;