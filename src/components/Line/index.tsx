import {Text} from '../Text';

import css from './style.css';

type Props = {
    text?: string;
    align?: 'left' | 'right' | 'center';
};

export const Line = ({text, align = 'center'}: Props) => {
    return (
        <div className={css.wrapper} role="separator">
            {align !== 'left' && <div className={css.line} />}

            {text && <Text className={css.text}>{text}</Text>}

            {align !== 'right' && <div className={css.line} />}
        </div>
    );
};
