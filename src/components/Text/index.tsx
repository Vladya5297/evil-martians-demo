import {CSSProperties, ReactNode} from "react"
import cn from 'classnames';
import css from './style.css';

type Props = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const Base = ({Tag, children, className, style}: Props & {Tag: 'h1' | 'h2' | 'h3' | 'span'}) => {
    return (
        <Tag className={cn(css.text, css[Tag], className)} style={style}>{children}</Tag>
    );
}

export const Text = (props: Props) => {
    return <Base {...props} Tag="span" />;

}

const H1 = (props: Props) => {
    return <Base {...props} Tag="h1" />;
}

const H2 = (props: Props) => {
    return <Base {...props} Tag="h2" />;
}

const H3 = (props: Props) => {
    return <Base {...props} Tag="h3" />;
}

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
