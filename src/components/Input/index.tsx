import cn from "classnames";
import {ChangeEvent, CSSProperties, HTMLInputTypeAttribute, useId} from "react";
import css from './style.css';

type Props = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
}

export const Input = ({label, value, onChange, type, className, style, placeholder}: Props) => {
    const id = useId();
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {onChange(event.target.value)}
    return (
        <div className={css.wrapper}>
            <input
                value={value}
                onChange={changeHandler}
                id={id}
                className={cn(css.input, value && css.filled)}
                style={style}
                type={type}
                placeholder={placeholder}
            />
            <label className={css.label} htmlFor={id}>
                <span>{label}</span>
            </label>
        </div>
    )
}