import cn from 'classnames';
import type {CSSProperties} from 'react';

import {Icon} from '../Icon';
import type {SvgProp} from '../Icon';

import css from './style.css';

export type ButtonVariantProp = 'action' | 'icon' | 'link';

export type ButtonProps = {
    /** Button inner text */
    text?: string;
    /** View variant */
    variant?: ButtonVariantProp;
    /** Button icon */
    icon?: SvgProp;
    className?: string;
    style?: CSSProperties;
    /** Button hint text */
    title?: string;
    type?: 'submit' | 'button';
    onClick?: () => void;
};

export const Button = ({
    text,
    icon,
    variant = 'action',
    type = 'button',
    title,
    className,
    style,
    onClick,
}: ButtonProps) => {
    const buttonClassName = cn(css.button, css[variant], className);

    return (
        <button
            onClick={onClick}
            className={buttonClassName}
            style={style}
            title={title}
            aria-label={text || title}
            // eslint-disable-next-line react/button-has-type
            type={type}
        >
            {text && <span>{text}</span>}

            {icon && <Icon svg={icon} size={20} />}
        </button>
    );
};
