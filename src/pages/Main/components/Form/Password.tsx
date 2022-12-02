import {useController, useFormContext} from 'react-hook-form';

import {Input} from '~/components/Input';
import {Key} from '~/components/Icon/icons';

export const Password = () => {
    const {control} = useFormContext();
    const {field} = useController({control, name: 'password'});

    return (
        <Input
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="***"
            icon={Key}
            {...field}
        />
    );
};
