import cn from "classnames";
import {CSSProperties} from "react";
import {Icon, IconProp} from "../Icon";
import css from './style.css';

export type ButtonVariantProp = 'action' | 'secondary' | 'link';

export type ButtonProps = {
    text?: string;
    variant?: ButtonVariantProp;
    icon?: IconProp;
    className?: string;
    style?: CSSProperties;
}

export const Button = ({text, icon, variant = 'action', className, style}: ButtonProps) => {
    const buttonClassName = cn(css.button, css[variant], className);

    return (
        <button className={buttonClassName} style={style}>
            {text && <span>{text}</span>}

            {icon && (
                <div className={css.icon}>
                    <Icon icon={icon} />
                </div>
            )}
        </button>
    );
}