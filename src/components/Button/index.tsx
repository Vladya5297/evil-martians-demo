import cn from 'classnames';
import type {CSSProperties} from 'react';

import {Icon} from '../Icon';
import type {SvgProp} from '../Icon';

import css from './style.css';

export type ButtonVariantProp = 'action' | 'icon' | 'link';

export type ButtonProps = {
    text?: string;
    variant?: ButtonVariantProp;
    icon?: SvgProp;
    className?: string;
    style?: CSSProperties;
    title?: string;
    type?: 'submit' | 'button';
};

export const Button = ({
    text,
    icon,
    variant = 'action',
    type = 'button',
    title,
    className,
    style,
}: ButtonProps) => {
    const buttonClassName = cn(css.button, css[variant], className);

    return (
        <button
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
