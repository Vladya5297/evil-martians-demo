import type {ReactNode} from "react";

import style from './style.css';

type Props = {
    children: ReactNode;
}

export const Card = ({children}: Props) => {
    return <div className={style.card}>{children}</div>
}