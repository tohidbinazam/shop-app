import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createCategory, modalHide, updateCategory } from '../../redux/category/action';
import makeSlug from '../../utility/makeSlug';

const AddCategory = () => {

    const { modal, category } = useSelector(state => state.category)
    
    const dispatch = useDispatch()
    
    // Init input state
    const [ input , setInput ] = useState({
            name: ''
        })

    const { name } = input

    useEffect(() => {
        setInput(category)
    }, [category])


    // Update init state
    const handelInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value }))
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if ( name ) {

            // Make slug and update
            const slug = makeSlug(name)

            if (category) {
                dispatch(updateCategory(category._id, { ...input, slug }))
            } else{

                dispatch(createCategory({ ...input, slug }))
                setInput({
                    name: ''
                })
            }
        } else {
            toast.error('Name field is required')
        }
    }

  return (
    <div>
        <Modal show={ modal } onHide={ () => dispatch(modalHide()) } centered>
            <Modal.Header closeButton>
                <h3>{ category ? 'Update' : 'Create' } Category</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit } >
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={ name } onChange={ handelInput } type='text' placeholder='Category name'/>
                    </Form.Group>
                    <Form.Group className='mb-3 text-end'>
                        <Button onClick={ () => dispatch(modalHide()) } variant='secondary me-2'>Close</Button>
                        <Button type='submit'>{ category ? 'Update' : 'Create' }</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddCategory