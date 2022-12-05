import type {ReactNode, CSSProperties} from 'react';
import cn from 'classnames';

import css from './style.css';

export type CardProps = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export const Card = ({children, className, style}: CardProps) => {
    return <div className={cn(css.card, className)} style={style}>{children}</div>;
};
