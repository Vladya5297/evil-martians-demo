import {Common, CommonProps} from "../Common";

export const Email = (props: CommonProps) => {
    return <Common {...props} type="text" inputMode="email" />
}
