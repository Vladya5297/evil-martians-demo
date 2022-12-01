import {Icon} from '~/components/Icon';
import {CircleXmark} from '~/components/Icon/icons';

import {preventFocusLost} from '../utils';
import css from '../style.css';

type Props = {
    onClick: () => void;
};

export const Clear = ({onClick}: Props) => {
    return (
        <button
            className={css.control}
            onClick={onClick}
            onMouseDown={preventFocusLost}
            title="Clear input"
            type="button"
        >
            <Icon svg={CircleXmark} />
        </button>
    );
};
