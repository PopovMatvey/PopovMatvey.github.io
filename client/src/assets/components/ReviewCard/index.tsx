import React from "react";
import "./css/style.css";

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
                        {/* Сотрудничаю с Матвеем недавно, но за короткий
                        срок помог с раскруткой группы. В планах создание
                        сайта. Понравилось, что учитывает ВСЕ пожелания клиента,
                        разъясняет кучу непонятных мне моментов, за что отдельное спасибо :) */}
                    </span>
                </div>
            </div>
        </>
    )
}