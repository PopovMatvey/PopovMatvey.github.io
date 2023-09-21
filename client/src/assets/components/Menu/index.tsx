import React, { useState } from "react"
import "./css/style.css"

/**
 * Меню
 * @returns Компонент "Меню" 
 */
export function Menu() {
    /* States  */
    const [flagMobileMenuControl, setFlagMobileMenuControl] = useState(true);   // Флаг контролья мобильного меню

    /* Const varibles */
    const titleString = "Popov matvey" //   Заголовок менб
    // Ссылки
    const hrefItems = [
        {
            key: 0,
            href: "#about-me",
            title: "обо мне",
        },
        {
            key: 1,
            href: "#services",
            title: "услуги",
        },
        {
            key: 2,
            href: "#portfolio",
            title: "Портфолио",
        },
        {
            key: 3,
            href: "#reviews",
            title: "отзывы",
        },
        {
            key: 4,
            href: "#contacts",
            title: "контакты",
        },
    ];

    /**
     * Получить id якорного блока
     * @param parEvent - объект "Событие"
     * @returns id якорного блока
     */
    function getIdTargetBlock(parEvent: any) {
        return parEvent.substr(23);
    }

    /**
     * Обработчик изменения контроля мобильного меню
     */
    const hendlerMobileNemuControlButton = () => {
        setFlagMobileMenuControl(!flagMobileMenuControl);
    }

    /**
     * Обработчие нажатия на пункт меню
     * @param event - объект "Событие"
     */
    const handlerMenuItemOnClick = (event: any) => {
        const idTargetBlock = getIdTargetBlock(event.target.href);

        event.preventDefault();

        document.getElementById(idTargetBlock)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <>
            {flagMobileMenuControl ? (
                <>
                    <div className="menu-head-container">
                        <div className="menu-title-container">
                            <h1>{titleString}</h1>
                        </div>
                        <div className="menu-button-container">
                            <button className="mobile-menu-control" onClick={hendlerMobileNemuControlButton}>{">"}</button>
                        </div>
                    </div>
                    <div className="menu-container">
                        {
                            hrefItems.map((element: any) =>
                                <div className="menu-container_item" key={element.key}>
                                    <a
                                        href={element.href}
                                        key={element.key}
                                        onClick={handlerMenuItemOnClick}
                                    >
                                        {element.title}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className="menu-head-container">
                        <div className="menu-title-container">
                            <h1>{titleString}</h1>
                        </div>
                        <div className="menu-button-container">
                            <button className="mobile-menu-control" onClick={hendlerMobileNemuControlButton}>{"="}</button>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}