import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createTag, modalHide, updateTag } from '../../redux/tag/action';
import makeSlug from '../../utility/makeSlug';

const AddTag = () => {

    const { modal, tag } = useSelector(state => state.tag)
    
    const dispatch = useDispatch()
    
    // Init input state
    const [ input , setInput ] = useState({
            name: ''
        })

    const { name } = input

    useEffect(() => {
        setInput(tag)
    }, [tag])


    // Update init state
    const handelInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value }))
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if ( name ) {

            // Make slug and update
            const slug = makeSlug( name )

            if (tag) {
                dispatch(updateTag(tag._id, { ...input, slug }))
            } else{

                dispatch(createTag({ ...input, slug }))
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
                <h3>{ tag ? 'Update' : 'Create' } Tag</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={ name } onChange={ handelInput } type='text' placeholder='Tag name'/>
                    </Form.Group>
                    <Form.Group className='mb-3 text-end'>
                        <Button onClick={ () => dispatch(modalHide()) } variant='secondary me-2'>Close</Button>
                        <Button type='submit'>{ tag ? 'Update' : 'Create' }</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddTag