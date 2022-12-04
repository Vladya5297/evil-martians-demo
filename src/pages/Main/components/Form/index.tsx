import {useForm, FormProvider} from 'react-hook-form';

import {Button} from '~/components/Button';
import {Column, Row} from '~/components/layout';

import {Email} from './Email';
import {Password} from './Password';
import {Submit} from './Submit';

export type FormValues = {
    email: string;
    password: string;
};

const defaultValues: FormValues = {email: '', password: ''};

export const Form = () => {
    const methods = useForm({defaultValues});
    const onSubmit = ({email, password}: FormValues) => alert(`Hello ${email} with password ${password} !`);
    const restorePassword = () => alert('Please, try to remember your password');

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Column gap={24}>
                    <Email />

                    <Password />

                    <Row justifyContent="flex-end">
                        <Button text="Forgot password?" variant="link" onClick={restorePassword} />
                    </Row>

                    <Submit />
                </Column>
            </form>
        </FormProvider>
    );
};
