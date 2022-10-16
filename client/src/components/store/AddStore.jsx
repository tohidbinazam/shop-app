import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import makeSlug from '../../utility/makeSlug';
import { useDispatch, useSelector } from 'react-redux';
import { createStore, modalHide, updateStore } from '../../redux/store/action';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AddStore = () => {
    
    const { modal, store } = useSelector(state => state.store)
    
    const dispatch = useDispatch()
    
    
    // Init input state
    const [ input , setInput ] = useState({
            name: '',
            city: '',
            owner: '',
            owner_number: ''
        })

    const { name, city, owner, owner_number, photo } = input

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

        if (name && city && owner && owner_number && photo) {
            const data = new FormData()

            // Make slug and update
            const slug = makeSlug(input.name)

            if (store) {
    
                data.append('name', name)
                data.append('city', city)
                data.append('owner', owner)
                data.append('owner_number', owner_number)
                data.append('slug', slug)
                data.append('photo', photo)
    
                dispatch(updateStore(store._id, data))
            } else{
                
                data.append('name', name)
                data.append('city', city)
                data.append('owner', owner)
                data.append('owner_number', owner_number)
                data.append('slug', slug)
                data.append('photo', photo)
                
                dispatch(createStore(data))
                setInput({
                    name: '',
                    city: '',
                    owner: '',
                    owner_number: ''
                })
                e.target.reset()
            }
        } else {
            toast.error('All fields are required')
        }
    }


  return (
    <div>
        <Modal show={ modal } onHide={ () => dispatch(modalHide()) } centered>
            <Modal.Header closeButton>
                <h3>{ store ? 'Update' : 'Create' } Store</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={ name } onChange={ handelInput } type='text' placeholder='Store name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control name='city' value={ city } onChange={ handelInput } type='text' placeholder='Store location'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Store Photo</Form.Label>
                        <Form.Control name='photo' onChange={ handelPhoto } type='file' accept="image/png, image/jpeg"/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner</Form.Label>
                        <Form.Control name='owner' value={ owner } onChange={ handelInput } type='text' placeholder='Store owner name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner number</Form.Label>
                        <Form.Control name='owner_number' value={ owner_number } onChange={ handelInput } type='text' placeholder='Store owner contact number'/>
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