import React from "react";
import "./css/style.css";
import { MessageForm } from "../MessageForm";

/**
 * Контакты
 * @returns Компонент "Контакты" 
 */
export function ContactContainer() {

    return (
        <>
            <div className="contact-container">
                <MessageForm />
            </div>
        </>
    )
}