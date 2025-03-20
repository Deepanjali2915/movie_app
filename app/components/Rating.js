"use client";

import { useState } from "react";

function Rating(props) {
  const { productId } = props;
  const [userRated, setUserRated] = useState(false);

  const ratings = JSON.parse(localStorage.getItem(`ratings-${productId}`)) || [];

  function handleRating(rating) {
    const newRatings = [...ratings, rating];
    localStorage.setItem(`ratings-${productId}`, JSON.stringify(newRatings));
    setUserRated(true);
  }

  // let sum = 0;
  // for (let i = 0; i < ratings.length; i++) {
  //   sum += ratings[i];
  // }

  // let averageRating = "0";
  // if (ratings.length > 0) {
  //   averageRating = (sum / ratings.length).toFixed(1);
  // }

  function renderStars() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button className="star" key={i} onClick={function () { handleRating(i); }} disabled={userRated}>
          ⭐
        </button>
      );
    }
    return stars;
  }

  return (
    <div className="detailsText">
      {renderStars()}
      {userRated && <p className="detailsText">Thanks for rating 😊</p>}
    </div>
  );
}
export default Rating;