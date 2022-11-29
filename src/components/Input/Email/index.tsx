import type {CommonProps} from '../Common';
import {Common} from '../Common';

export const Email = (props: CommonProps) => {
    return <Common {...props} type="text" inputMode="email" />;
};
