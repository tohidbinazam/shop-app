import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Axios from 'axios'
import { toast } from 'react-toastify';
import makeSlug from '../../utility/makeSlug';
// import { useDispatch } from 'react-redux';
// import { getAllStore } from '../../redux/store/action';

const AddStore = ({ show, hide }) => {

    // const dispatch = useDispatch()

    // Init input state
    const [ input, setInput ] = useState({})

    // Update init state
    const handelInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value }))
    }
    
    // Handle single photo
    const handelPhoto = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.files[0] }))
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        // Make slug and update
        const slug = makeSlug(input.name)

        const data = new FormData()
        data.append('name', input.name)
        data.append('city', input.city)
        data.append('owner', input.owner)
        data.append('owner_number', input.owner_number)
        data.append('slug', slug)
        data.append('photo', input.photo)
        

        // Add New Store
        Axios.post('http://localhost:5050/api/v1/store', data).then(res => {
            toast.success(res.data)
            // dispatch(getAllStore())
            
        }).catch(() => {
            toast.error('Store Add Failed');

        })
    }


  return (
    <div>
        <Modal show={ show } onHide={ hide } centered>
            <Modal.Header closeButton>
                <h3>Create Store</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' onChange={ handelInput } type='text' placeholder='Store name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control name='city' onChange={ handelInput } type='text' placeholder='Store location'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Store Photo</Form.Label>
                        <Form.Control name='photo' onChange={ handelPhoto } type='file'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner</Form.Label>
                        <Form.Control name='owner' onChange={ handelInput } type='text' placeholder='Store owner name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner number</Form.Label>
                        <Form.Control name='owner_number' onChange={ handelInput } type='text' placeholder='Store owner contact number'/>
                    </Form.Group>
                    <Form.Group className='mb-3 text-end'>
                        <Button onClick={ hide } variant='secondary me-2'>Close</Button>
                        <Button type='submit' onClick={ hide } >Create</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddStore