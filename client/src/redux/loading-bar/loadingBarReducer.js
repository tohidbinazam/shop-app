import initialState from "./initialState";
import { END, START } from "./types";


const loadingBarReducer = (state = initialState, { type }) => {

    switch (type) {
        case START:
            return 100

        case END:
            return 0
    
        default:
            return state
    }
}

export default loadingBarReducer