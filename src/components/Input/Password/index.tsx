import cn from 'classnames';

import {useToggle} from '~/utils/useToggle';

import {Core} from '../Core';
import type {CoreProps, InputTypeProp} from '../index';
import css from '../style.css';

import {PasswordToggler} from './PasswordToggler';

export const Password = (props: CoreProps) => {
    const [currentType, toggleType] = useToggle<InputTypeProp>(['password', 'text']);
    const isPasswordVisible = currentType === 'text';

    const inputClassName = cn({
        [css.hasControl]: true,
    }, props.className);

    return (
        <>
            <Core {...props} type={currentType} className={inputClassName} />
            <PasswordToggler onClick={toggleType} visible={isPasswordVisible} />
        </>
    );
};
