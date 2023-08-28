import React from "react";
import './css/style.css';
import { HeaderInformation } from "../HeaderInformation";
import { Menu } from "../Menu";

export function Header() {

    return (
        <header>
            <HeaderInformation />
            <Menu/>
        </header>
    );
}