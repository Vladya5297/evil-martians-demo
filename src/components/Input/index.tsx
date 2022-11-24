import {ChangeEvent, CSSProperties, ForwardedRef, forwardRef, HTMLInputTypeAttribute, useId} from "react";
import cn from "classnames";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";

import {Icon} from '~/components/Icon';
import type {IconProp} from '~/components/Icon';

import css from './style.css';


type Props = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
    icon?: IconProp;
    clearable?: boolean;
}

export const Input = forwardRef((
    {label, value, onChange, type, className, style, placeholder, icon, clearable}: Props,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const id = useId();

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {onChange(event.target.value)};
    const clearHandler = () => {onChange('')};

    const inputClassName = cn(
        css.input,
        value && css.filled,
        icon && css.hasIcon,
        clearable && css.clearable,
    )

    return (
        <div className={cn(css.wrapper, className)} style={style}>
            <input
                value={value}
                onChange={changeHandler}
                id={id}
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                ref={ref}
            />

            {clearable && value && (
                <div className={css.clear} onClick={clearHandler}>
                    <Icon icon={faCircleXmark} />
                </div>)
            }

            <label className={css.label} htmlFor={id}>
                <span>{label}</span>
            </label>

            {icon && (
                <label className={css.icon} htmlFor={id}>
                    <Icon icon={icon} />
                </label>)
            }
        </div>
    )
});