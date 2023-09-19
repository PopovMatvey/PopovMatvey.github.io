import React from "react"
import "./css/style.css"

/**
 * Заголовок
 * @param param0 - пропс (Заголоаок)
 * @returns Компонент "Заголовок"
 */
export function Title({ title }: any) {

    return (
        <h1 className="block-title">{title}</h1>
    )
}