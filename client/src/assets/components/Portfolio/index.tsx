import React from "react";
import "./css/style.css";
import { Title } from "../Title";
import { PortfolioCard } from "../PortfolioCard";

// Портфолио
export function PortfolioContainer() {
    const arrayPortfolio = [
        {
            id: 0,
            imageSrc: "./images/portfolio/first.svg",
            href: "https://termobeton.org/",
        },
        {
            id: 1,
            imageSrc: "./images/portfolio/misic-platform.png",
            href: "http://62.113.107.56:2001/",
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
                                href={element.href}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}