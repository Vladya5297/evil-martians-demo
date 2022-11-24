import {useState} from "react"
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

import {Card} from "~/components/Card"
import {Input} from "~/components/Input"

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
                />
            </div>
        </Card>
    );
}