import Eye from '~/components/Icon/eye.svg';
import EyeSlash from '~/components/Icon/eye-slash.svg';

import {preventFocusLost} from "../utils";
import css from '../style.css';

type Props = {
    visible: boolean;
    onClick: () => void;
}

export const PasswordToggler = ({visible, onClick}: Props) => {
    return (
        <button
            className={css.control}
            onClick={onClick}
            onMouseDown={preventFocusLost}
            title={visible ? 'hide password' : 'show password'}
        >
            {visible ? <EyeSlash /> : <Eye />}
        </button>
    );
};
