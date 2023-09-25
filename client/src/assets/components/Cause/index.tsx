import React from "react";
import './css/style.css';
import { Title } from "../Title";

/**
 * Зачем Вам это
 * @returns Компонент "Зачем Вам это"
 */
export function CauseContainer() {

    return (
        <>
            <div className="cause-container">
                <Title title="Зачем вам это" />

            </div>
        </>
    );
}