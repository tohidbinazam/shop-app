import axios from "axios";
import { ALL_STORES } from "./type";
import { toast } from 'react-toastify';


export const getAllStores = () => async ( dispatch ) => {

    await axios.get('http://localhost:5050/api/v1/store').then(res => {
        dispatch({
            type : ALL_STORES,
            payload : res.data
        })
    })
}

export const createStore = (data) => async (dispatch) => {

    // Add New Store
    await axios.post('http://localhost:5050/api/v1/store', data).then(res => {
        toast.success(res.data)
        dispatch(getAllStores())
        
    }).catch(() => {
        toast.error('Store Add Failed');

    })
}

export const deleteStore = (id) => async (dispatch, getState) => {

    // Add New Store
    await axios.delete(`http://localhost:5050/api/v1/store/${id}`).then(res => {
        const { stores } = getState().store
        const payload = stores.filter(data => data._id !== id)
        dispatch({
            type: ALL_STORES,
            payload
        });
        toast.success(res.data);

    }).catch(() => {
        toast.error('Store Delate Failed');
    })
}