import axios from "axios";
import { ALL_PRODUCTS, MODAL_HIDE, MODAL_SHOW, SINGLE_PRODUCT, SKELETON_END, SKELETON_START } from "./type";
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

export const getAllProducts = () => async ( dispatch ) => {

    dispatch(skeletonStart())
    await axios.get('/api/v1/product').then(res => {
            dispatch(skeletonEnd())
            dispatch({
                type : ALL_PRODUCTS,
                payload : res.data
            })
        })
}

export const createProduct = (data) => async (dispatch, getState) => {

    // Add New Product
    await axios.get('/api/v1/product', data).then(res => {
        dispatch(modalHide())
        toast.success('Product Add Successfully')
        const { products } = getState().product
        products.push(res.data)

        dispatch({
            type: ALL_PRODUCTS,
            payload: products
        })
        
    }).catch(err => {
        toast.error(err.response.data.message);
    })
}

export const deleteProduct = (id) => (dispatch, getState) => {

    // Add New Product
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

        await axios.delete(`/api/v1/product/${id}`).then(res => {
            const { products } = getState().product
            const payload = products.filter(data => data._id !== id)
            dispatch({
                type: ALL_PRODUCTS,
                payload
            });
            toast.success(res.data);

        }).catch(() => {
            toast.error('Product Delate Failed');
        })
    } else {
        swal("Your imaginary file is safe!");
    }
    });
}

export const singleProduct = (id) => (dispatch, getState) => {

    // Add New Product
    const { products } = getState().product
    const payload = products.find(data => data._id === id)
    dispatch({
        type: SINGLE_PRODUCT,
        payload
    });
    dispatch(modalShow())
}

export const updateProduct = (id, data) => async (dispatch, getState) => {

    // Add New Product
    await axios.patch(`/api/v1/product/${id}`, data).then(res => {
        dispatch(modalHide())

        // Handle product update without send server request
        const { products } = getState().product
        const index = products.findIndex(data => data._id === id)
        products[index] = res.data
        dispatch({
            type: ALL_PRODUCTS,
            payload: products
        })
        toast.success('Product update successfully');

    }).catch(err => {
        toast.error(err.response.data.message);
    })
}