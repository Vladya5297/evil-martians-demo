import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

export type IconProp = FontAwesomeIconProps['icon'];

export type IconProps = {
    icon: IconProp;
    width?: number;
}

export const Icon = ({icon, width}: IconProps) => {
    return <FontAwesomeIcon icon={icon} width={width} />;
};
