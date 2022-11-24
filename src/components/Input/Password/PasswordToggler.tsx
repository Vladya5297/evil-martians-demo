import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";

import {Icon} from '~/components/Icon';

import {preventFocusLost} from "../utils";
import css from '../style.css';

type Props = {
    visible: boolean;
    onClick: () => void;
}

export const PasswordToggler = ({visible, onClick}: Props) => {
    return (
        <div
            className={css.control}
            onClick={onClick}
            onMouseDown={preventFocusLost}
            title={visible ? 'hide password' : 'show password'}
        >
            <Icon icon={visible ? faEyeSlash : faEye} width={20} />
        </div>
    );
};
