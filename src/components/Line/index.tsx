import {Text} from '../Text';

import css from './style.css';

export type LineProps = {
    /** Line text */
    text?: string;
    /** Line text position */
    align?: 'left' | 'right' | 'center';
};

export const Line = ({text, align = 'center'}: LineProps) => {
    return (
        <div className={css.wrapper} role="separator">
            {align !== 'left' && <div className={css.line} />}

            {text && <Text className={css.text}>{text}</Text>}

            {align !== 'right' && <div className={css.line} />}
        </div>
    );
};
