import React from "react";
import './css/slider-item.css';
import { ReviewCard } from "../ReviewCard";

/**
 * Пункт слайдера
 * @param param0 - пропс (объект "Карточка отзыва")
 * @returns компонент "Пункт слайдера"
 */
export const SliderItem = ({ item }: any) => {

  return (
    <div className="carousel-item">
      <ReviewCard item={item} />
    </div>
  );
};