import { END, START } from "./types";


export const loadingStart = () => {
    return {
        type : START
    }
}

export const loadingEnd = () => {
    return {
        type : END
    }
}