import axios from "axios";
import { ALL_CATEGORIES, MODAL_HIDE, MODAL_SHOW, SINGLE_CATEGORY, SKELETON_END, SKELETON_START } from "./type";
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

export const getAllCategories = () => async ( dispatch ) => {

    dispatch(skeletonStart())
    await axios.get('/api/v1/category').then(res => {
            dispatch(skeletonEnd())
            dispatch({
                type : ALL_CATEGORIES,
                payload : res.data
            })
        })
}

export const createCategory = (data) => async (dispatch, getState) => {

    // Add New category
    await axios.post('/api/v1/category', data).then(res => {
        dispatch(modalHide())
        toast.success('Category Add Successfully')
        const { categories } = getState().category
        categories.push(res.data)

        dispatch({
            type: ALL_CATEGORIES,
            payload: categories
        })
        
    }).catch(error => {
        toast.error(error.response.data.message);
    })
}

export const deleteCategory = (id) => (dispatch, getState) => {

    // Add New category
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

        await axios.delete(`/api/v1/category/${id}`).then(res => {
            const { categories } = getState().category
            const payload = categories.filter(data => data._id !== id)
            dispatch({
                type: ALL_CATEGORIES,
                payload
            });
            toast.success(res.data);

        }).catch(() => {
            toast.error('Category Delate Failed');
        })
    } else {
        swal("Your imaginary file is safe!");
    }
    });
}

export const singleCategory = (id) => (dispatch, getState) => {

    // Add New category
    const { categories } = getState().category
    const payload = categories.find(data => data._id === id)
    dispatch({
        type: SINGLE_CATEGORY,
        payload
    });
    dispatch(modalShow())
}

export const updateCategory = (id, data) => async (dispatch, getState) => {

    // Add New category
    await axios.patch(`/api/v1/category/${id}`, data).then(res => {
        dispatch(modalHide())

        // Handle category update without send server request
        const { categories } = getState().category
        const index = categories.findIndex(data => data._id === id)
        categories[index] = res.data
        dispatch({
            type: ALL_CATEGORIES,
            payload: categories
        })
        toast.success('Category update successfully');

    }).catch(() => {
        toast.error('Category Update Failed');
    })
}