import axios from "axios";
import { ALL_STORE } from "./type";


export const getAllStore = () => {
    axios.get('http://localhost:5050/api/v1/store').then(res => {

        return {
            type : ALL_STORE,
            payload : res.data
        }
    })
}