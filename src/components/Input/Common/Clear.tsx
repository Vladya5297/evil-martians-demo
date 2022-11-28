import CircleXmark from '~/components/Icon/circle-xmark.svg';

import {preventFocusLost} from "../utils";
import css from '../style.css';

type Props = {
    onClick: () => void;
}

export const Clear = ({onClick}: Props) => {
    return (
        <button
            className={css.control}
            onClick={onClick}
            onMouseDown={preventFocusLost}
            title="clear input"
        >
            <CircleXmark />
        </button>
    )
};
