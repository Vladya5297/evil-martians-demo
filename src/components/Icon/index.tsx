import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

export type IconProp = FontAwesomeIconProps['icon'];

type Props = {
    icon: IconProp
}

export const Icon = ({icon}: Props) => {
    return <FontAwesomeIcon icon={icon} />;
};
