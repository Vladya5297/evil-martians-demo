import {useController, useFormContext} from 'react-hook-form';

import {Input} from '~/components/Input';
import {Key} from '~/components/Icon/icons';

export const Password = () => {
    const {control} = useFormContext();
    const {field, fieldState} = useController({
        control,
        name: 'password',
        rules: {required: 'This field is required'},
    });

    return (
        <Input
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="***"
            icon={Key}
            error={fieldState.error?.message}
            {...field}
        />
    );
};
