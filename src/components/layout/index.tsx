import type {CSSProperties, ReactNode} from 'react';
import cn from 'classnames';

import css from './style.css';

export type Props = {
    children: ReactNode;
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    gap?: CSSProperties['gap'];
    className?: string;
    style?: CSSProperties;
};

const Base = ({children, justifyContent, alignItems, gap, className, style}: Props) => {
    return (
        <div
            className={className}
            style={{justifyContent, alignItems, gap, ...style}}
        >
            {children}
        </div>
    );
};

export const Row = (props: Props) => {
    const className = cn(css.row, props.className);

    return <Base {...props} className={className} />;
};

export const Column = (props: Props) => {
    const className = cn(css.column, props.className);

    return <Base {...props} className={className} />;
};
