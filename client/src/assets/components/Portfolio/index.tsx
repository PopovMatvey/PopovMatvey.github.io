import React from "react";
import "./css/style.css";
import { Title } from "../Title";
import { PortfolioCard } from "../PortfolioCard/imdex";

// Портфолио
export function PortfolioContainer() {
    const arrayPortfolio = [
        {
            id: 0,
            imageSrc: "./images/portfolio/first.svg",
        },
        {
            id: 1,
            imageSrc: "./images/portfolio/first.svg",
        },
    ]


    return (
        <>
            <div className="portfolio-container">
                <Title title="Портфолио" />
                <div className="portfolio-container_assortiment">
                    {
                        arrayPortfolio.map((element: any, i: any) => (
                            <PortfolioCard
                                key={i}
                                imageSrc={element.imageSrc}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}