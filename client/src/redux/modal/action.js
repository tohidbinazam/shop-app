import { HIDE, SHOW } from "./typs";

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