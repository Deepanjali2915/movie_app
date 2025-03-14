"use client";

import { useState, useEffect } from "react";

function AverageRating(props) {
  const { productId } = props;
  const [averageRating, setAverageRating] = useState(0);

  useEffect(function () {
    const savedRatings = JSON.parse(localStorage.getItem(`ratings-${productId}`)) || [];

    if (savedRatings && savedRatings.length > 0) {
      let sum = 0;
    
      for (let i = 0; i < savedRatings.length; i++) {
        sum += Number(savedRatings[i]) || 0;
      }
    
      setAverageRating((sum / savedRatings.length).toFixed(1));
    } else {
      setAverageRating(0);
    }
    
  }, [productId]);

  return <p>Average Rating: {averageRating} ⭐</p>;
}
export default AverageRating;