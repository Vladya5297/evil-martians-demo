import {Icon} from '~/components/Icon';
import {Eye, EyeSlash} from '~/components/Icon/icons';

import {preventFocusLost} from '../utils';
import css from '../style.css';

type Props = {
    visible: boolean;
    onClick: () => void;
};

export const PasswordToggler = ({visible, onClick}: Props) => {
    return (
        <button
            className={css.control}
            onClick={onClick}
            onMouseDown={preventFocusLost}
            title={visible ? 'Hide password' : 'Show password'}
            type="button"
        >
            <Icon svg={visible ? EyeSlash : Eye} size={20} />
        </button>
    );
};
