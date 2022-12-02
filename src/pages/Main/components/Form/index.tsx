import {useForm, FormProvider} from 'react-hook-form';

import {Button} from '~/components/Button';
import {Column, Row} from '~/components/layout';

import {Email} from './Email';
import {Password} from './Password';
import {Submit} from './Submit';

const defaultValues = {email: '', password: ''};

export const Form = () => {
    const methods = useForm({defaultValues});
    const onSubmit = (data: unknown) => console.log(data);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Column gap={20}>
                    <Email />

                    <Password />

                    <Row justifyContent="flex-end">
                        <Button text="Forgot password?" variant="link" />
                    </Row>

                    <Submit />
                </Column>
            </form>
        </FormProvider>
    );
};
