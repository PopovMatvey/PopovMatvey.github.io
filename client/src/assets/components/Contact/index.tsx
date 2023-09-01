import React from "react";
import "./css/style.css";
import contactBackground from "./image/contactBackgroung.svg";
import { Footer } from "../Footer";
import { MessageForm } from "../MessageForm";

// Контакты
export function ContactContainer() {

    return (
        <>
            <div className="contact-container">
                <MessageForm />
            </div>
        </>
    )
}