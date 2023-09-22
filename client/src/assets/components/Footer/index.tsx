import React from "react";
import "./css/style.css";

/**
 * Подвал
 * @returns Компонент "Подвал"
 */
export function Footer() {
    const arrayContacts: any = [
        {
            href: "https://vk.com/matyha_62",
            src: "./images/contacts/vk-icon.svg",
            alt: "иконка vk",
        },
        {
            href: "https://tlgg.ru/matyha_62",
            src: "./images/contacts/telegram-icon.svg",
            alt: "иконка telegram",
        },
        {
            href: "https://api.whatsapp.com/send/?phone=%2B79156273829&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,+%D1%8F+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%B2%D0%B0%D1%88%D0%B8%D1%85+%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85",
            src: "./images/contacts/whatsup-icon.svg",
            alt: "иконка what's up",
        },
        {
            href: "mailto:popov.matvey.s62@gmail.com",
            src: "./images/contacts/email-icon.svg",
            alt: "иконка почты",
        },
        {
            href: "tel:+79156273829",
            src: "./images/contacts/phone-icon.svg",
            alt: "иконка телефона",
        },
        {
            href: "https://github.com/PopovMatvey",
            src: "./images/contacts/git-icon.svg",
            alt: "иконка git",
        },
    ];

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
                            <a href={element.href} key={i} target={"blank"}>
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