import type {MouseEvent} from "react";

export const preventFocusLost = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
};
