import axios from "axios";
import { ALL_STORES } from "./type";


export const getAllStores = () => async ( dispatch ) => {

    await axios.get('http://localhost:5050/api/v1/store').then(res => {
        dispatch({
            type : ALL_STORES,
            payload : res.data
        })
    })
}