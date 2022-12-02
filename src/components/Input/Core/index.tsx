import type {ChangeEvent} from 'react';
import cn from 'classnames';

import type {CoreProps} from '..';
import css from '../style.css';

export const Core = ({
    inputId,
    fref,
    onChange,
    className,
    value,
    ...props
}: CoreProps) => {
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
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
            className={inputClassName}
            {...props}
        />
    );
};
