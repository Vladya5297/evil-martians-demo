import {ChangeEvent, CSSProperties, ForwardedRef, forwardRef, HTMLInputTypeAttribute, useId} from "react";
import cn from "classnames";

import {useToggle} from "~/utils/useToggle";
import {Icon} from '~/components/Icon';
import type {IconProp} from '~/components/Icon';

import {Clear} from './Clear';
import {PasswordToggler} from "./PasswordToggler";
import css from './style.css';

type InputTypeProp = 'text' | 'email' | 'password';

type Props = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: InputTypeProp;
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
    icon?: IconProp;
    clearable?: boolean;
}

const isPassword = (type: InputTypeProp): boolean => type === 'password';

export const Input = forwardRef((
    {label, value, onChange, type = "text", className, style, placeholder, icon, clearable}: Props,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const id = useId();

    const isPasswordType = isPassword(type);
    const shouldShowClear = Boolean(clearable && value && !isPasswordType);
    const shouldShowPasswordToggler = Boolean(isPasswordType && value);

    const [currentType, toggleType] = useToggle<InputTypeProp>([type, 'text']);
    const isPasswordVisible = !isPassword(currentType);

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
                ref={ref}
                id={id}
                type={currentType}
                value={value}
                placeholder={placeholder}
                className={inputClassName}
                onChange={changeHandler}
            />

            {shouldShowClear && <Clear onClick={clearHandler} />}
            {shouldShowPasswordToggler && <PasswordToggler onClick={toggleType} visible={isPasswordVisible} />}

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
