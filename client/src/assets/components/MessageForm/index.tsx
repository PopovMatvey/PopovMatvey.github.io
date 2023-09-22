import React, { useState } from "react";
import "./css/style.css";
import "./css/modalNotification.css";
import { request } from "../../hook/request";
import { useNotificationWindowState } from "./hook/notificationWindowState";

/**
 * Форма связи
 * @returns Компонент "Форма связи"
 */
export function MessageForm() {
    /* Input state */
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageTextArea, setMessageTextArea] = useState('');
    const [requestMailObject, setRequestMailObject] = useState({});
    /* Hooks */
    const {
        titleText, setTitleText,
        bodyText, setBodyText,
        modalWindowState, setModalWindowState,
    } = useNotificationWindowState();   // Состояния модального окна
    // const 
    const phoneNumberString = "+7-(915)-627-38-29";         // Телефон
    const emailString = "popov.matvey.s62@gmail.com";       // Почта
    // Сообщения для модального окна
    const warningMassageTitle = "Внимание";
    const accessfulMessageTitle = "Успех";
    const accessfulMessage = "Всё отправлено успешно";
    const warningMassage = "Сервер сейчас недоступен, повторите позже";
    const urlRequestSendMail = "/api/mail";
    const methodRequestSendMail = "POST";

    /**
     * Получить модальное окно
     * @param parTitleText - Заголовок модального окна
     * @param parBodyText - Текст сообщения модального окна
     * @param parModalWindowState - Состояние видимости модального окна
     */
    function getModalWindow(parTitleText: string, parBodyText: string, parModalWindowState: boolean) {
        setTitleText(parTitleText);
        setBodyText(parBodyText);
        setModalWindowState(parModalWindowState);
    }

    /**
     * Получить запросный объект почты
     * @returns запросный объект почты
     */
    function getRequestMailObject() {
        return {
            name: nameInput,
            email: emailInput,
            message: messageTextArea,
        }
    }

    /**
     * Получить объект валидности
     * @returns объект валидности
     */
    function getObjectValid() {
        if (nameInput === '') {
            return {
                validState: false,
                textMessage: "Не введено имя",
            };
        }

        if (emailInput === '') {
            return {
                validState: false,
                textMessage: "Не введена почта",
            };
        }

        return {
            validState: true,
            textMessage: "",
        }
    }

    /**
     * Обработчик формы связи
     * @param event - объект выполненного события
     */
    const handlerOnSubmitMessageForm = async (event: any) => {
        const validObject = getObjectValid();
        const requestMailObjectVarible = getRequestMailObject();

        event.preventDefault();
        setRequestMailObject(requestMailObjectVarible);

        if (validObject.validState) {
            let responseObject = await request(urlRequestSendMail, methodRequestSendMail, requestMailObject);

            if (responseObject?.status === 200) {
                getModalWindow(accessfulMessageTitle, accessfulMessage, true);
            } else {
                getModalWindow(warningMassageTitle, warningMassage, true);
            }
        } else {
            getModalWindow(warningMassageTitle, validObject.textMessage, true);
        }
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
            {/* Модальное окно */
                <>
                    {modalWindowState &&
                        < div id="modalWindow" >
                            <div className="body-modal-notification" onClick={() => {
                                setModalWindowState(false);
                            }} />
                            <div className="modal-notification">
                                <button onClick={() => {
                                    setModalWindowState(false);
                                }}>X</button>
                                <div className="modal-notification_content">
                                    <h1>{titleText}</h1>
                                    <span>{bodyText}</span>
                                </div>
                            </div>
                        </div >
                    }
                </>
            }
        </>
    )
}