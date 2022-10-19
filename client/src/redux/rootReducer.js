import quickViewModal from "./modal/quickViewModal";
import { combineReducers } from "redux"
import storeReducer from "./store/storeReducer";
import loadingBarReducer from "./loading-bar/loadingBarReducer";
import brandReducer from "./brand/brandReducer";
import tagReducer from "./tag/tagReducer";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./product/productReducer";


const rootReducer = combineReducers({
    progress : loadingBarReducer,
    product : productReducer,
    product_modal: quickViewModal,
    category: categoryReducer,
    tag: tagReducer,
    brand : brandReducer,
    store : storeReducer,
})

export default rootReducer