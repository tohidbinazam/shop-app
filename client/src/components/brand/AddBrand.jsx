import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBrand, modalHide, updateBrand } from '../../redux/brand/action';
import makeSlug from '../../utility/makeSlug';

const AddBrand = () => {

    const { modal, brand } = useSelector(state => state.brand)
    
    const dispatch = useDispatch()
    
    // Init input state
    const [ input , setInput ] = useState({
            name: '',
            origin: '',
            local_distributor: '',
            company_number: ''
        })

    const { name, origin, local_distributor, company_number } = input

    useEffect(() => {
        setInput(brand)
    }, [brand])


    // Update init state
    const handelInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value }))
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Hello');
        if (name && origin && local_distributor && company_number) {

            // Make slug and update
            const slug = makeSlug(input.name)

            if (brand) {
                dispatch(updateBrand(brand._id, { ...input, slug }))
            } else{

                dispatch(createBrand({ ...input, slug }))
                setInput({
                    name: '',
                    origin: '',
                    local_distributor: '',
                    company_number: ''
                })
            }
        } else {
            toast.error('All fields are required')
        }
    }

  return (
    <div>
        <Modal show={ modal } onHide={ () => dispatch(modalHide()) } centered>
            <Modal.Header closeButton>
                <h3>{ brand ? 'Update' : 'Create' } Brand</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={ name } type='text' onChange={ handelInput } placeholder='Brand name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Origin</Form.Label>
                        <Form.Select name='origin' value={ origin } onChange={ handelInput }>
                            <option >Select Country</option>
                            <option value='Bangladesh' >Bangladesh</option>
                            <option value='India' >India</option>
                            <option value='Chine' >Chine</option>
                            <option value='Japan' >Japan</option>
                            <option value='Thailand'>Thailand</option>
                            <option value='Singapore'>Singapore</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Local Distributor</Form.Label>
                        <Form.Control name='local_distributor' value={ local_distributor } type='text' onChange={ handelInput } placeholder='Distributor company name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Company number</Form.Label>
                        <Form.Control name='company_number' value={ company_number } type='text' onChange={ handelInput } placeholder='Company contact number'/>
                    </Form.Group>
                    <Form.Group className='mb-3 text-end'>
                        <Button onClick={ () => dispatch(modalHide()) } variant='secondary me-2'>Close</Button>
                        <Button type='submit'>{ brand ? 'Update' : 'Create' }</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddBrand