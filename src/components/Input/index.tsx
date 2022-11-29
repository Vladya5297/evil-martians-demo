import {forwardRef, useId} from "react";
import type {ReactNode, CSSProperties, ForwardedRef} from "react";
import cn from "classnames";

import {Password} from "./Password";
import {Common} from "./Common";
import {Email} from "./Email";
import css from './style.css';

export type InputTypeProp = 'text' | 'email' | 'password';

/** Props that will be passed directly to the input element */
export type CoreProps = {
    inputId: string;
    value: string;
    onChange: (value: string) => void;
    fref?: ForwardedRef<HTMLInputElement>;
    type?: InputTypeProp;
    placeholder?: string;
    className?: string;
    name?: string;
    /**
     * Defines view for virtual keyboards
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
    */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     * Look for available values:
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
    */
    autoComplete?: string;
}

export type InputProps = {
    label: string;
    icon?: ReactNode;
    clearable?: boolean;
    className?: string;
    style?: CSSProperties;
} & Omit<CoreProps, 'inputId' | 'fref'>

export const Input = forwardRef((
    {
        label,
        icon,
        clearable,
        className,
        style,
        ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const inputId = useId();

    const inputClassName = cn({
        [css.hasIcon]: icon,
    })

    const coreProps: CoreProps = {
        inputId,
        className: inputClassName,
        fref: ref,
        ...props
    }

    return (
        <div className={cn(css.wrapper, className)} style={style}>
            {(() => {
                switch (props.type) {
                    case 'password':
                        return <Password {...coreProps} />
                    case 'email':
                        return <Email {...coreProps} clearable={clearable} />
                    /*
                        Place to extend input type view with custom components
                        for example: "tel" with masked input, or "number" with proper styles
                    */
                    default:
                        return <Common {...coreProps} clearable={clearable} />
                }
            })()}

            <label className={css.label} htmlFor={inputId}>
                <span>{label}</span>
            </label>

            {icon && <div className={css.icon}>{icon}</div>}
        </div>
    )
});
