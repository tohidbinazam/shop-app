import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios'
import { toast } from 'react-toastify';
import makeSlug from '../../utility/makeSlug';
import { useDispatch } from 'react-redux';
import { getAllStore } from '../../redux/store/action';

const AddStore = ({ show, hide }) => {

    const dispatch = useDispatch()

    // Init input state
    const [ input, setInput ] = useState()

    // Update init state
    const handelInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Make slug and update
        const slug = makeSlug(input.name)
        

        // Add New Store
        axios.post('http://localhost:5050/api/v1/store', { ...input, slug}).then(res => {
            toast.success(res.data)
            dispatch(getAllStore())
            
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
                        <Form.Label>Owner</Form.Label>
                        <Form.Control name='owner' onChange={ handelInput } type='text' placeholder='Owner name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner number</Form.Label>
                        <Form.Control name='owner_number' onChange={ handelInput } type='text' placeholder='Owner contact number'/>
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