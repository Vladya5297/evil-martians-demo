import {forwardRef, useId} from "react";
import type {CSSProperties, ForwardedRef} from "react";
import cn from "classnames";

import {Icon} from '~/components/Icon';
import type {IconProp} from '~/components/Icon';

import {Password} from "./Password";
import {Common} from "./Common";
import css from './style.css';

export type InputTypeProp = 'text' | 'email' | 'password';

export type InputProps = {
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

export const Input = forwardRef((
    {
        label,
        value,
        onChange,
        type = "text",
        className,
        style,
        placeholder,
        icon,
        clearable
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const inputId = useId();

    const inputClassName = cn({
        [css.hasIcon]: icon,
    })

    const coreProps = {
        inputId,
        value,
        onChange,
        type,
        placeholder,
        className: inputClassName,
        fref: ref,
    }

    return (
        <div className={cn(css.wrapper, className)} style={style}>
            {(() => {
                switch (type) {
                    case 'password':
                        return <Password {...coreProps} />
                    default:
                        return <Common {...coreProps} clearable={clearable} />
                }
            })()}

            <label className={css.label} htmlFor={inputId}>
                <span>{label}</span>
            </label>

            {icon && (
                <label className={css.icon} htmlFor={inputId}>
                    <Icon icon={icon} />
                </label>)
            }
        </div>
    )
});
