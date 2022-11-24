import type {MouseEvent} from "react";

export const preventFocusLost = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
};
