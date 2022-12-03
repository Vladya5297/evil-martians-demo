import {useController, useFormContext} from 'react-hook-form';

import {Input} from '~/components/Input';
import {Envelope} from '~/components/Icon/icons';

export const Email = () => {
    const {control} = useFormContext();
    const {field, fieldState} = useController({
        control,
        name: 'email',
        rules: {required: 'This field is required'},
    });

    return (
        <Input
            label="Email"
            type="email"
            placeholder="example@mail.com"
            autoComplete="username"
            icon={Envelope}
            clearable
            error={fieldState.error?.message}
            {...field}
        />
    );
};
