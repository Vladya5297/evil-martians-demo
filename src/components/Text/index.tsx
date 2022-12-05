import type {CSSProperties, ReactNode} from 'react';
import cn from 'classnames';

import css from './style.css';

export type TextProps = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
};

type BaseProps = TextProps & {Tag: 'h1' | 'h2' | 'h3' | 'span'};

const Base = ({Tag, children, className, style}: BaseProps) => {
    return (
        <Tag className={cn(css.text, css[Tag], className)} style={style}>{children}</Tag>
    );
};

export const Text = (props: TextProps) => {
    return <Base {...props} Tag="span" />;
};

const H1 = (props: TextProps) => {
    return <Base {...props} Tag="h1" />;
};

const H2 = (props: TextProps) => {
    return <Base {...props} Tag="h2" />;
};

const H3 = (props: TextProps) => {
    return <Base {...props} Tag="h3" />;
};

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
