import React, { useState } from "react";
import "./css/style.css";

/**
 * Форма связи
 * @returns Компонент "Форма связи"
 */
export function MessageForm() {
    /* Input state */
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageTextArea, setMessageTextArea] = useState('');
    // const 
    const phoneNumberString = "+7-(915)-627-38-29";         // Телефон
    const emailString = "popov.matvey.s62@gmail.com";       // Почта

    /**
     * Обработчик формы связи
     * @param event - объект выполненного события
     */
    const handlerOnSubmitMessageForm = (event: any) => {
        event.preventDefault();
        console.log("sucsesfull");
    }

    /**
     * Обработчик на изменение свойства "nameInput"
     * @param event - объект выполненного события
     */
    const handlerNameInput = (event: any) => {
        setNameInput(event.target.value);
    }

    /**
     * Обработчик на изменение свойства "emailInput"
     * @param event - объект выполненного события
     */
    const handlerEmailInput = (event: any) => {
        setEmailInput(event.target.value);
    }

    /**
    * Обработчик на изменение свойства "emailInput"
    * @param event - объект выполненного события
    */
    const handlerMessageTextArea = (event: any) => {
        setMessageTextArea(event.target.value);
    }

    return (
        <>
            <div className="contact-container_form">
                <div className="contact-container_form__message">
                    <h3>Мои контакты</h3>
                    <div className="contact-container_form__message__text">
                        <span>
                            С радостью отвечу на ваши вопросы
                        </span>
                        <span>
                            Вы можете использовать форму ниже или написать по адресу
                        </span>
                        <a href={`mailto:${emailString}`}>
                            {emailString}
                        </a>
                        <a href={`tel:${phoneNumberString}`}>
                            {phoneNumberString}
                        </a>
                    </div>
                </div>
                <form onSubmit={handlerOnSubmitMessageForm}>
                    <div className="contact-container_form__row">
                        <input
                            type="text"
                            placeholder="Имя"
                            value={nameInput}
                            onChange={handlerNameInput} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={emailInput}
                            onChange={handlerEmailInput} />
                    </div>
                    <div className="contact-container_form__row">
                        <textarea
                            name="message"
                            placeholder="Сообщение"
                            value={messageTextArea}
                            onChange={handlerMessageTextArea}
                        >
                        </textarea>
                    </div>
                    <div className="contact-container_form__submit-button">
                        <input type="submit" value={"Отправить"} />
                    </div>
                </form>
            </div>
        </>
    )
}