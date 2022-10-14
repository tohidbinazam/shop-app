import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import makeSlug from '../../utility/makeSlug';
import { useDispatch, useSelector } from 'react-redux';
import { createStore, modalHide, updateStore } from '../../redux/store/action';
import { useEffect } from 'react';

const AddStore = () => {
    
    const { modal, store } = useSelector(state => state.store)
    
    const dispatch = useDispatch()
    
    
    // Init input state
    const [ input , setInput ] = useState('')

    useEffect(() => {
        setInput(store)
    }, [store])


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
        
        if (input._id) {

            data.append('name', input.name)
            data.append('city', input.city)
            data.append('owner', input.owner)
            data.append('owner_number', input.owner_number)
            data.append('slug', slug)
            data.append('photo', input.photo)

            dispatch(updateStore(input._id, data))
        } else{
            
            data.append('name', input.name)
            data.append('city', input.city)
            data.append('owner', input.owner)
            data.append('owner_number', input.owner_number)
            data.append('slug', slug)
            data.append('photo', input.photo)
            
            dispatch(createStore(data)) 
            setInput('')
        }
    }


  return (
    <div>
        <Modal show={ modal } onHide={ () => dispatch(modalHide()) } centered>
            <Modal.Header closeButton>
                <h3>Create Store</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={input.name} onChange={ handelInput } type='text' placeholder='Store name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control name='city' value={input.city} onChange={ handelInput } type='text' placeholder='Store location'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Store Photo</Form.Label>
                        <Form.Control name='photo' onChange={ handelPhoto } type='file' accept="image/png, image/jpeg"/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner</Form.Label>
                        <Form.Control name='owner' value={input.owner} onChange={ handelInput } type='text' placeholder='Store owner name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner number</Form.Label>
                        <Form.Control name='owner_number' value={input.owner_number} onChange={ handelInput } type='text' placeholder='Store owner contact number'/>
                    </Form.Group>
                    <Form.Group className='mb-3 text-end'>
                        <Button onClick={ () => dispatch(modalHide()) } variant='secondary me-2'>Close</Button>
                        <Button type='submit'> Submit </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddStore