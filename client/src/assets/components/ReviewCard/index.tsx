import React from "react";
import "./css/style.css";
import userIcon from './image/user.png';

/**
 * Карточка отзыва
 * @param param0 пропс ( объект "Карточка отзыва")
 * @returns компонент "Карточка отзыва"
 */
export function ReviewCard({ item }: any) {

    return (
        <>
            <div className="review-card">
                <div className="review-card_title-block">
                    <div className="review-card_title-block_row">
                        <img src={userIcon} alt="Картинка пользователя" />
                    </div>
                    <div className="review-card_title-block_row">
                        <div className="review-card__fio">
                            <h5>
                                {item.FIO}
                            </h5>
                        </div>
                        <div className="review-card__job-title">
                            <h6>
                                {item.jobTitle}
                            </h6>
                        </div>

                    </div>
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