import axios from "axios";
import { ALL_TAGS, MODAL_HIDE, MODAL_SHOW, SINGLE_TAG, SKELETON_END, SKELETON_START } from "./type";
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

export const getAllTags = () => async ( dispatch ) => {

    dispatch(skeletonStart())
    await axios.get('/api/v1/tag').then(res => {
            dispatch(skeletonEnd())
            dispatch({
                type : ALL_TAGS,
                payload : res.data
            })
        })
}

export const createTag = (data) => async (dispatch, getState) => {

    // Add New tag
    await axios.post('/api/v1/tag', data).then(res => {
        dispatch(modalHide())
        toast.success('Tag Add Successfully')
        const { tags } = getState().tag
        tags.push(res.data)

        dispatch({
            type: ALL_TAGS,
            payload: tags
        })
        
    }).catch(error => {
        toast.error(error.response.data.message);
    })
}

export const deleteTag = (id) => (dispatch, getState) => {

    // Add New tag
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

        await axios.delete(`/api/v1/tag/${id}`).then(res => {
            const { tags } = getState().tag
            const payload = tags.filter(data => data._id !== id)
            dispatch({
                type: ALL_TAGS,
                payload
            });
            toast.success(res.data);

        }).catch(() => {
            toast.error('Tag Delate Failed');
        })
    } else {
        swal("Your imaginary file is safe!");
    }
    });
}

export const singleTag = (id) => (dispatch, getState) => {

    // Add New tag
    const { tags } = getState().tag
    const payload = tags.find(data => data._id === id)
    dispatch({
        type: SINGLE_TAG,
        payload
    });
    dispatch(modalShow())
}

export const updateTag = (id, data) => async (dispatch) => {

    // Add New tag
    await axios.patch(`/api/v1/tag/${id}`, data).then(res => {
        dispatch(modalHide())
        dispatch(getAllTags())
        toast.success(res.data);

    }).catch(() => {
        toast.error('Tag Update Failed');
    })
}