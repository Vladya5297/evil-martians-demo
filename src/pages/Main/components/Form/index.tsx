import {useState} from "react"
import {faEnvelope, faKey, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import {Card} from "~/components/Card"
import {Input} from "~/components/Input"
import {Button} from "~/components/Button"

import css from './style.css';

export const Form = () => {
    const [value, setValue] = useState('');
    return (
        <Card>
            <div className={css.form}>
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

                <Button text="Sign in" icon={faAngleRight} />
            </div>
        </Card>
    );
}