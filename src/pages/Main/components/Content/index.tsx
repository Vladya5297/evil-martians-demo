import {Card} from '~/components/Card';
import {Button} from '~/components/Button';
import {Column, Row} from '~/components/layout';
import {Line} from '~/components/Line';
import {Text} from '~/components/Text';
import {Facebook, Twitter, Google} from '~/components/Icon/icons';

import {Form} from '../Form';

import css from './style.css';

export const Content = () => {
    return (
        <Card className={css.card}>
            <Column gap={20}>
                <Text.H2>Login</Text.H2>

                <Form />

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
