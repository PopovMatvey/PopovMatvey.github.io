import React from "react";
import "./css/style.css";

/**
 * Подвал
 * @returns Компонент "Подвал"
 */
export function Footer() {
    const arrayContacts: any = [
        {
            href: "уц",
            src: "",
            alt: "",
        },
    ]

    return (
        <>
            <footer>
                <div className="footer-block">
                    <div className="footer-block_title">
                        <h1>Popov Matvey</h1>
                    </div>
                    <div className="footer-block_contacts">
                        {arrayContacts.map((element: any, i: number) => (
                            // Можно зарефакторить
                            <a href={element.href} key={i}>
                                <img src={element.src} alt={element.alt} />
                            </a>
                        ))}

                    </div>
                </div>
                <div className="footer-signature">
                    <span>Copyright © 2023 Попов Матвей. Design by Web</span>
                </div>
            </footer>
        </>
    );
}