import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement>;

export type SvgProp = React.FC<SVGProps>;

export type IconProps = {
    svg: SvgProp;
    /** Shorthand for width and height. */
    size?: number;
} & SVGProps;

export const Icon = ({svg: Tag, size, ...props}: IconProps) => {
    return (
        <Tag
            aria-hidden="true"
            fill="currentColor"
            width={size}
            height={size}
            {...props}
        />
    );
};
