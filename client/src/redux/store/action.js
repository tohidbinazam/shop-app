import axios from "axios";
import { ALL_STORES, MODAL_HIDE, MODAL_SHOW, SINGLE_STORE, SKELETON_END, SKELETON_START } from "./type";
import { toast } from 'react-toastify';
import swal from 'sweetalert'


const skeletonStart = () => ({
    type : SKELETON_START
})

const skeletonEnd = () => ({
    type : SKELETON_END
})

export const modalShow = () => ({
    type : MODAL_SHOW
})
export const modalHide = () => ({
    type : MODAL_HIDE
})

export const getAllStores = () => async ( dispatch ) => {

    dispatch(skeletonStart())
    await axios.get('/api/v1/store').then(res => {
            dispatch(skeletonEnd())
            dispatch({
                type : ALL_STORES,
                payload : res.data
            })
        })
}

export const createStore = (data) => async (dispatch, getState) => {

    // Add New Store
    await axios.post('/api/v1/store', data).then(res => {
        dispatch(modalHide())
        toast.success('Store Add Successfully')
        const { stores } = getState().store
        stores.push(res.data)

        dispatch({
            type: ALL_STORES,
            payload: stores
        })
        
    }).catch(error => {
        toast.error(error.response.data.message);
    })
}

export const deleteStore = (id) => (dispatch, getState) => {

    // Add New Store
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    })
    .then(async (willDelete) => {
    if (willDelete) {
        swal("Deleted","Poof! Your imaginary file has been deleted!", "success");

        await axios.delete(`/api/v1/store/${id}`).then(res => {
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
    } else {
        swal("Your imaginary file is safe!");
    }
    });
}

export const singleStore = (id) => (dispatch, getState) => {

    // Add New Store
    const { stores } = getState().store
    const payload = stores.find(data => data._id === id)
    dispatch({
        type: SINGLE_STORE,
        payload
    });
    dispatch(modalShow())
}

export const updateStore = (id, data) => async (dispatch) => {

    // Add New Store
    await axios.patch(`/api/v1/store/${id}`, data).then(res => {
        dispatch(modalHide())
        dispatch(getAllStores())
        toast.success(res.data);

    }).catch(() => {
        toast.error('Store Update Failed');
    })
}