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
            href: "#",
            title: "обо мне",
        },
        {
            key: 1,
            href: "#",
            title: "услуги",
        },
        {
            key: 2,
            href: "#",
            title: "Портфолио",
        },
        {
            key: 3,
            href: "#",
            title: "отзывы",
        },
        {
            key: 4,
            href: "#",
            title: "контакты",
        },
    ];

    /**
     * Обработчик изменения контроля мобильного меню
     */
    const hendlerMobileNemuControlButton = () => {
        setFlagMobileMenuControl(!flagMobileMenuControl);
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
                                    <a href={element.href} key={element.key}>{element.title}</a>
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