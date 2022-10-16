import axios from "axios";
import { ALL_BRANDS, MODAL_HIDE, MODAL_SHOW, SINGLE_BRAND, SKELETON_END, SKELETON_START } from "./type";
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

export const getAllBrands = () => async ( dispatch ) => {

    dispatch(skeletonStart())
    await axios.get('/api/v1/brand').then(res => {
            dispatch(skeletonEnd())
            dispatch({
                type : ALL_BRANDS,
                payload : res.data
            })
        })
}

export const createBrand = (data) => async (dispatch, getState) => {

    // Add New brand
    await axios.post('/api/v1/brand', data).then(res => {
        dispatch(modalHide())
        toast.success('brand Add Successfully')
        const { brands } = getState().brand
        brands.push(res.data)

        dispatch({
            type: ALL_BRANDS,
            payload: brands
        })
        
    }).catch(error => {
        toast.error(error.response.data.message);
    })
}

export const deleteBrand = (id) => (dispatch, getState) => {

    // Add New brand
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

        await axios.delete(`/api/v1/brand/${id}`).then(res => {
            const { brands } = getState().brand
            const payload = brands.filter(data => data._id !== id)
            dispatch({
                type: ALL_BRANDS,
                payload
            });
            toast.success(res.data);

        }).catch(() => {
            toast.error('brand Delate Failed');
        })
    } else {
        swal("Your imaginary file is safe!");
    }
    });
}

export const singleBrand = (id) => (dispatch, getState) => {

    // Add New brand
    const { brands } = getState().brand
    const payload = brands.find(data => data._id === id)
    dispatch({
        type: SINGLE_BRAND,
        payload
    });
    dispatch(modalShow())
}

export const updateBrand = (id, data) => async (dispatch) => {

    // Add New brand
    await axios.patch(`/api/v1/brand/${id}`, data).then(res => {
        dispatch(modalHide())
        dispatch(getAllBrands())
        toast.success(res.data);

    }).catch(() => {
        toast.error('brand Update Failed');
    })
}