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
                    value={value}
                    onChange={setValue}
                    type="email"
                    icon={faEnvelope}
                />

                <Input
                    label="Password"
                    value={value}
                    onChange={setValue}
                    type="password"
                />
            </div>
        </Card>
    );
}