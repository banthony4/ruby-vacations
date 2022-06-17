// import React from 'react';

// function ReviewCard() {

//     return(
//         <div>

//         </div>
//     )
// }

// export default ReviewCard;

import React, { useState } from "react";
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'

function ReviewCard({
  review,
  reviewInput,
  starInput,
  deleteReview,
  handleEdit,
  reviewEditInput,
  setReviewEditInput,
  setStarEditInput,
  starEditInput,
}) {
  const [displayEdit, setDisplayEdit] = useState(false);
  // change initial state
  // const [reviewEditInput, setReviewEditInput] = useState(reviewInput);
  // const [starEditInput, setStarEditInput] = useState(starInput);
  const { content, rating, user_id, house_id } = review;



return (
    <div className="review-card-outer-div">
      <h3>{content}</h3>
      {/* <h3>{star_rating}</h3> */}
      <Rating value={rating} readOnly />
      {/* <button className="btnEdit" onClick={() => setDisplayEdit(!displayEdit)}>edit</button>
      <button className="btnDelete" onClick={() => deleteReview(review)}>delete</button> */}
      {displayEdit ? (
        <form
          className="review-edit-form"
          onSubmit={(e) => handleEdit(review, e)}
        >
          <input
            onChange={(e) => setReviewEditInput(e.target.value)}
            placeholder="edit review"
            value={reviewEditInput}
          ></input>
          <input
            onChange={(e) => setStarEditInput(e.target.value)}
            placeholder="edit star_rating"
            // CHANGE VALUES
            value={starEditInput}
          ></input>
          <button onClick={(e) => handleEdit(review, e)}>update</button>
        </form>
      ) : null}
      {/* </Paper> */}
    </div>
  );
}

export default ReviewCard;

// import React, { useState } from "react";
// import Rating from '@mui/material/Rating'
// function ReviewCard({
//   review,
//   reviewInput,
//   starInput,
//   deleteReview,
//   handleEdit,
//   reviewEditInput,
//   setReviewEditInput,
//   setStarEditInput,
//   starEditInput,
//   houses
// }) {
//   const [displayEdit, setDisplayEdit] = useState(false);
//   const { content, rating, house_id } = review;
//   const reviewHouse = houses.find(house => house.id === house_id)
//   const houseImage = reviewHouse.image
// return (
//     <div className="review-card-div-one">
//       <div className="house-image">
//         <img src={houseImage} alt="house" className="house-image"/>
//       </div>
//       <div className="rating-div">
//         <h3>{rating}</h3>
//         <Rating value={rating} readOnly />
//       </div>
//       <div className="review-text">
//         <h3>{content}</h3>
//       </div>
//       <div className="edit-div">
//         {displayEdit ? (
//           <form
//             className="review-edit-form"
//             onSubmit={(e) => handleEdit(review, e)}
//           >
//             <input
//               onChange={(e) => setReviewEditInput(e.target.value)}
//               placeholder="edit review"
//               value={reviewEditInput}
//             ></input>
//             <input
//               onChange={(e) => setStarEditInput(e.target.value)}
//               placeholder="edit star_rating"
//               // CHANGE VALUES
//               value={starEditInput}
//             ></input>
//             <button onClick={(e) => handleEdit(review, e)}>update</button>
//           </form>
//         ) : null}
//         <button className="btnEdit" onClick={() => setDisplayEdit(!displayEdit)}>edit</button>
//       </div>
//       <div className="delete-div">
//         <button className="btnDelete" onClick={() => deleteReview(review)}>delete</button>
//       </div>
//     </div>
//   );
// }
// export default ReviewCard;