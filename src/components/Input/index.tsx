import cn from "classnames";
import {ChangeEvent, CSSProperties, ForwardedRef, forwardRef, HTMLInputTypeAttribute, useId} from "react";
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

export const Input = forwardRef((
    {label, value, onChange, type, className, style, placeholder}: Props,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const id = useId();
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {onChange(event.target.value)}
    return (
        <div className={cn(css.wrapper, className)} style={style}>
            <input
                value={value}
                onChange={changeHandler}
                id={id}
                className={cn(css.input, value && css.filled)}
                type={type}
                placeholder={placeholder}
                ref={ref}
            />
            <label className={css.label} htmlFor={id}>
                <span>{label}</span>
            </label>
        </div>
    )
});