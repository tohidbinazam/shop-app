import initialState from "./initialState";
import { HIDE, SHOW } from "./types";


const quickViewModal = (state = initialState, { type, payload }) => {

    switch (type) {
        case SHOW:
            return true

        case HIDE:
            return false
    
        default:
            return state
    }
}

export default quickViewModal