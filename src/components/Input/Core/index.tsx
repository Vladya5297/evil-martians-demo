import type {ChangeEvent} from "react"
import cn from "classnames";

import {CoreProps} from "..";
import css from '../style.css';

export const Core = ({
    inputId,
    value,
    onChange,
    type,
    placeholder,
    className,
    fref,
    name,
    inputMode,
    autoComplete,
}: CoreProps) => {
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    };

    const inputClassName = cn({
        [css.input]: true,
        [css.filled]: value,
    }, className);

    return (
        <input
            id={inputId}
            ref={fref}
            value={value}
            onChange={changeHandler}
            type={type}
            name={name}
            placeholder={placeholder}
            inputMode={inputMode}
            autoComplete={autoComplete}
            className={inputClassName}
        />
    )
}