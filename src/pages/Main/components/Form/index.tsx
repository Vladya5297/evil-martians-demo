import {useState} from "react"

import {Card} from "~/components/Card"
import {Input} from "~/components/Input"
import {Button} from "~/components/Button"
import {Column, Row} from "~/components/layout"
import {Line} from "~/components/Line"
import {Text} from "~/components/Text"
import IconAngleRight from '~/components/Icon/angle-right.svg';
import IconFacebook from '~/components/Icon/facebook.svg';
import IconTwitter from '~/components/Icon/twitter.svg';
import IconGoogle from '~/components/Icon/google.svg';
import Envelope from '~/components/Icon/envelope.svg';
import Key from '~/components/Icon/key.svg';

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
                    icon={<Envelope />}
                    clearable
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="***"
                    value={value}
                    onChange={setValue}
                    icon={<Key />}
                />

                <Row justifyContent="flex-end">
                    <Button text="Forgot password?" variant="link" />
                </Row>

                <Button text="Sign in" icon={<IconAngleRight />} />

                <Line text="or" />

                <Row justifyContent="space-evenly">
                    <Button icon={<IconFacebook />} variant="icon" />
                    <Button icon={<IconTwitter />} variant="icon" />
                    <Button icon={<IconGoogle />} variant="icon" />
                </Row>
            </Column>
        </Card>
    );
}