import {useState} from 'react';

import {Card} from '~/components/Card';
import {Input} from '~/components/Input';
import {Button} from '~/components/Button';
import {Column, Row} from '~/components/layout';
import {Line} from '~/components/Line';
import {Text} from '~/components/Text';
import {AngleRight, Facebook, Twitter, Google, Envelope, Key} from '~/components/Icon/icons';

import css from './style.css';

export const Form = () => {
    const [value, setValue] = useState('');

    return (
        <Card className={css.card}>
            <Column gap={20}>
                <Text.H2>Login</Text.H2>

                <Input
                    label="Email"
                    type="email"
                    placeholder="example@mail.com"
                    value={value}
                    onChange={setValue}
                    icon={Envelope}
                    clearable
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="***"
                    value={value}
                    onChange={setValue}
                    icon={Key}
                />

                <Row justifyContent="flex-end">
                    <Button text="Forgot password?" variant="link" />
                </Row>

                <Button text="Sign in" icon={AngleRight} title="Submit" type="submit" />

                <Line text="or" />

                <Row justifyContent="space-evenly">
                    <Button icon={Facebook} variant="icon" title="Enter with facebook" />
                    <Button icon={Twitter} variant="icon" title="Enter with twitter" />
                    <Button icon={Google} variant="icon" title="Enter with google" />
                </Row>
            </Column>
        </Card>
    );
};
