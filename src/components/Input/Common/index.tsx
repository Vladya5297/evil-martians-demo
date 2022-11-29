import cn from "classnames";

import {Core} from "../Core";
import {Clear} from "./Clear";
import {CoreProps} from "..";
import css from '../style.css';

export type CommonProps = {clearable?: boolean} & CoreProps;

export const Common = ({clearable, ...props}: CommonProps) => {
    const shouldShowClear = Boolean(clearable && props.value);

    const clearHandler = () => {
        props.onChange('')
    };

    const inputClassName = cn({
        [css.hasControl]: clearable,
    }, props.className)

    return (
        <>
            <Core {...props} className={inputClassName} />
            {shouldShowClear && <Clear onClick={clearHandler} />}
        </>
    )
};
