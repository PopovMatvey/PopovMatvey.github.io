import React from "react";
import './css/slider-item.css';
import { ReviewCard } from "../ReviewCard";
// import { hostName } from "../../data/hostName";

// Изображение слайдера (пункт)
export const SliderItem = ({ item }: any) => {
  // const hrefImage = `${hostName}${item}`;

  return (
    <div className="carousel-item">
      <ReviewCard item={item} />
    </div>
  );
};