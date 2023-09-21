import React from "react";
import "./css/style.css";
import { Title } from "../Title";
import { PortfolioCard } from "../PortfolioCard";

/**
 * Портфолио
 * @returns компонент "Портфолио"
 */
export function PortfolioContainer() {
    /* Varibles */
    // Портфолио ()
    const arrayPortfolio = [
        {
            id: 0,
            imageSrc: "./images/portfolio/first.svg",
            href: "http://62.113.107.56:2000/",
        },
        {
            id: 1,
            imageSrc: "./images/portfolio/misic-platform.png",
            href: "http://62.113.107.56:2001/",
        },
        {
            id: 2,
            imageSrc: "./images/portfolio/best-chrome.png",
            href: "http://62.113.107.56:2002/",
        },
        {
            id: 3,
            imageSrc: "./images/portfolio/qr-app.png",
            href: "http://62.113.107.56:2003/",
        },
    ];

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
                    <div id="reviews"></div>
                </div>
            </div>
        </>
    )
}