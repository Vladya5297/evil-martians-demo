import type {ReactNode, CSSProperties} from "react";
import cn from 'classnames';

import css from './style.css';

type Props = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties
}

export const Card = ({children, className, style}: Props) => {
    return <div style={style} className={cn(css.card, className)}>{children}</div>
}