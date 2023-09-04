import React from "react";
import "./css/style.css";

// Подвал
export function Footer() {
    const arrayContacts = [
        {
            href: "",
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
                        <a href="">s</a>
                        <a href="">w</a>
                    </div>
                </div>
                <div className="footer-signature">
                    <span>Copyright © 2023 Попов Матвей. Design by Web</span>
                </div>
            </footer>
        </>
    );
}