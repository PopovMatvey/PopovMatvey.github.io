import React from "react";
import './css/style.css';
import { Menu } from "../Menu";

/**
 * Шапка
 * @returns компонент "Шапка" 
 */
export function Header() {

    return (
        <header>
            <Menu/>
        </header>
    );
}