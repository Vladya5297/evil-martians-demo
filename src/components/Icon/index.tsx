import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

export type IconProp = FontAwesomeIconProps['icon'];

type Props = {
    icon: IconProp;
    width?: number;
}

export const Icon = ({icon, width}: Props) => {
    return <FontAwesomeIcon icon={icon} width={width} />;
};
