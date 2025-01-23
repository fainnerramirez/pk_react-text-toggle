import React, { useState } from "react";
import './styles.css';

export const ToogleText = ({
    children,
    showText,
    animate = true
}) => {
    const [isShowText, setIsShowText] = useState(showText);
    const toggleVisibility = () => setIsShowText(pre => !pre);

    return (
        <div>
            <button onClick={toggleVisibility}>
            {isShowText ? 'Ocultar' : 'Mostrar'} texto
            </button>   
            <div
            style={{
                opacity: isVisibleState ? 1 : 0,
                transition: animate ? 'opacity 0.3s ease-in-out' : 'none',
            }}
            >
            {children}
            </div>
        </div>
    );
}