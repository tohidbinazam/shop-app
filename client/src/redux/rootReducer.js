import quickViewModal from "./modal/quickViewModal";
import { combineReducers } from "redux"
import storeReducer from "./store/storeReducer";
import loadingBarReducer from "./loading-bar/loadingBarReducer";
import brandReducer from "./brand/brandReducer";
import tagReducer from "./tag/tagReducer";


const rootReducer = combineReducers({
    product_modal: quickViewModal,
    progress : loadingBarReducer,
    tag: tagReducer,
    brand : brandReducer,
    store : storeReducer,
})

export default rootReducer