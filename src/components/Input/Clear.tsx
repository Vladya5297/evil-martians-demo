import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import {Icon} from '~/components/Icon';

import {preventFocusLost} from "./utils";
import css from './style.css';

type Props = {
    onClick: () => void;
}

export const Clear = ({onClick}: Props) => {
    return (
        <div
            className={css.clear}
            onClick={onClick}
            onMouseDown={preventFocusLost}
            title="clear input"
        >
            <Icon icon={faCircleXmark} width={20} />
        </div>
    )
};
