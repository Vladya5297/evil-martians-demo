import type {MouseEvent} from 'react';

export const preventFocusLost = <T>(event: MouseEvent<T>): void => {
    event.preventDefault();
};
