import { HIDE, SHOW } from "./types";

export const quickShow = () => {
    return {
        type : SHOW
    }
}

export const quickHide = () => {
    return {
        type : HIDE
    }
}