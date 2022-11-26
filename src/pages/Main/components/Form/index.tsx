import {useState} from "react"
import {faEnvelope, faKey, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import {Card} from "~/components/Card"
import {Input} from "~/components/Input"
import {Button} from "~/components/Button"

import css from './style.css';
import {Column, Row} from "~/components/layout"
import {Line} from "~/components/Line"

export const Form = () => {
    const [value, setValue] = useState('');

    return (
        <Card className={css.card}>
            <Column gap={20}>
                <h2>Login</h2>

                <Input
                    label="Email"
                    type="email"
                    placeholder="example@mail.com"
                    value={value}
                    onChange={setValue}
                    icon={faEnvelope}
                    clearable
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="***"
                    value={value}
                    onChange={setValue}
                    icon={faKey}
                />

                <Row justifyContent="flex-end">
                    <Button text="Forgot password?" variant="link" />
                </Row>

                <Button text="Sign in" icon={faAngleRight} />

                <Line text="or" />

                <Row justifyContent="space-evenly">
                    <Button icon={faAngleRight} variant="secondary" />
                    <Button icon={faAngleRight} variant="secondary" />
                    <Button icon={faAngleRight} variant="secondary" />
                </Row>
            </Column>
        </Card>
    );
}