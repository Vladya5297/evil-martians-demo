import cn from "classnames";

import {Core, CoreProps} from "../Core";
import {Clear} from "./Clear";
import css from '../style.css';

type Props = {clearable?: boolean} & CoreProps;

export const Common = ({clearable, ...props}: Props) => {
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
