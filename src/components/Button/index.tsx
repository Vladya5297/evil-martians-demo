import cn from "classnames";
import {CSSProperties, ReactNode} from "react";

import css from './style.css';

export type ButtonVariantProp = 'action' | 'icon' | 'link';

export type ButtonProps = {
    text?: string;
    variant?: ButtonVariantProp;
    icon?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const Button = ({text, icon, variant = 'action', className, style}: ButtonProps) => {
    const buttonClassName = cn(css.button, css[variant], className);

    return (
        <button className={buttonClassName} style={style}>
            {text && <span>{text}</span>}

            {icon}
        </button>
    );
}