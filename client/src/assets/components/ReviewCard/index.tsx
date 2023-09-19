import React from "react";
import "./css/style.css";

/**
 * Карточка отзыва
 * @param param0 пропс ( объект "Карточка отзыва")
 * @returns компонент "Карточка отзыва"
 */
export function ReviewCard({ item }: any) {

    return (
        <>
            <div className="review-card">
                <div className="review-card__fio">
                    <h6>
                        {item.FIO}
                    </h6>
                </div>
                <div className="review-card__job-title">
                    <h6>
                        {item.jobTitle}
                    </h6>
                </div>
                <div className="review-card__text">
                    <span>
                        {item.textReview}
                    </span>
                </div>
            </div>
        </>
    )
}