import {useState} from "react"
import {Card} from "~/components/Card"
import {Input} from "~/components/Input"

export const Form = () => {
    const [value, setValue] = useState('');
    return (
        <Card>
            <Input
                label="Email"
                value={value}
                onChange={setValue}
                type="email"
            />
        </Card>
    );
}