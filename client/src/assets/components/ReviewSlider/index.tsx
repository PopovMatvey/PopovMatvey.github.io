import React from "react";
import "./css/style.css";
import { useActiveIndexState } from "./hook/useActiveIndexState";
import { SliderItem as SliderlItem } from "./SliderlItem";
import arrorBack from "./images/arrow-back.png";
import arrorNext from "./images/arrow-next.png";

// Слайдер изображений
export const ReviewSlider = ({ items }: any) => {
  const { activeIndex, setActiveIndex } = useActiveIndexState();

  // Обновить индекс
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      {/* Содержимое слайдера */}
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`
        }}
      >
        {items.map((item: any, i: any) => {
          return <SliderlItem key={i++} item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        {/* Кнопка назад */}
        <div className="button-arrow_container">
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <img src={arrorBack} alt="" />
          </button>
          {/* Конпка назад */}
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <img src={arrorNext} alt="" />
          </button>
        </div>
        {/* Буллиты */}
        <div className="indicators">
          {items.map((_item: any, index: any) => {
            return (
              <button
                key={index}
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <div
                  key={index}
                  className={`material-symbols-outlined 
                  ${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`}
                >
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};