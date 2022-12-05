import {useCallback, useState} from 'react';

export const useToggle = <T>(values: [T, T]) => {
    const [index, setIndex] = useState(0);
    // eslint-disable-next-line no-bitwise
    const toggleHandler = useCallback(() => {setIndex(value => value ^ 1)}, []);

    return [values[index], toggleHandler] as const;
};
