import initialState from "./initialState";
import { HIDE, SHOW } from "./typs";


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