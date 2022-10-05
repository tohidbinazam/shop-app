import { HIDE, SHOW } from "./types";

export const modalShow = () => {
    return {
        type : SHOW
    }
}

export const modalHide = () => {
    return {
        type : HIDE
    }
}