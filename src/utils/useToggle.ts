import {useState} from "react"

export const useToggle = <T>(values: [T, T]) => {
    const [index, setIndex] = useState(0);

    return [values[index], () => {setIndex(value => value ^ 1)}] as const;
};
