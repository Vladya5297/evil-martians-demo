import {Button} from '~/components/Button';
import {AngleRight} from '~/components/Icon/icons';

export const Submit = () => {
    return (
        <Button
            text="Sign in"
            icon={AngleRight}
            title="Submit"
            type="submit"
        />
    );
};
