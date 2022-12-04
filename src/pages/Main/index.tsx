import {Content} from './components/Content';
import css from './style.css';

export const Main = () => {
    return (
        <main className={css.content}>
            <Content />
        </main>
    );
};
