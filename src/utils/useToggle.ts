import {useState} from 'react';

export const useToggle = <T>(values: [T, T]) => {
    const [index, setIndex] = useState(0);

    // eslint-disable-next-line no-bitwise
    return [values[index], () => {setIndex(value => value ^ 1)}] as const;
};
