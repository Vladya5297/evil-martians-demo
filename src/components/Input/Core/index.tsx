import type {ChangeEvent, ForwardedRef} from "react"
import cn from "classnames";

import css from '../style.css';

export type CoreProps = {
    inputId: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    className?: string;
    fref?: ForwardedRef<HTMLInputElement>
}

export const Core = ({
    inputId,
    value,
    onChange,
    type,
    placeholder,
    className,
    fref
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
            type={type}
            value={value}
            placeholder={placeholder}
            className={inputClassName}
            onChange={changeHandler}
        />
    )
}