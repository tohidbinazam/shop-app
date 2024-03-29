import axios from "axios";
import { ADD_HIDE, ADD_SHOW, ALL_PRODUCTS, EDIT_HIDE, EDIT_SHOW, QUICK_HIDE, QUICK_SHOW, SINGLE_PRODUCT, SKELETON_END, SKELETON_START } from "./type";
import { toast } from 'react-toastify';
import swal from 'sweetalert'


const skeletonStart = () => ({
    type : SKELETON_START
})

const skeletonEnd = () => ({
    type : SKELETON_END
})

export const quickShow = (id) => (dispatch) => {
    dispatch(singleProduct(id))
    dispatch({ type : QUICK_SHOW })
}
export const quickHide = () => ({
    type : QUICK_HIDE
})

export const addShow = () => ({
    type : ADD_SHOW
})
export const addHide = () => ({
    type : ADD_HIDE
})

export const editShow = (id) => (dispatch) => {
    dispatch({ type : EDIT_SHOW })
    dispatch(singleProduct(id))
}
export const editHide = () => ({
    type : EDIT_HIDE
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
    dispatch(addHide())
    await axios.post('/api/v1/product', data).then(res => {
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

    // Single view Product
    const { products } = getState().product
    const product = products.find(data => data._id === id)
    const tag = []
    const store = []
    product.tags.map(data => tag.push(data._id))
    product.stores.map(data => store.push(data._id))
    const payload = {
        ...product, tag, store,
        category : product.category._id,
        brand : product.brand._id,
        category_name: product.category.name,
        brand_name: product.brand.name
    }
    dispatch({
        type: SINGLE_PRODUCT,
        payload
    });
}

export const updateProduct = (id, data) => async (dispatch, getState) => {

    // Add New Product
    await axios.patch(`/api/v1/product/${id}`, data).then(res => {
        dispatch(editHide())

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