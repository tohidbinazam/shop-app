import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import makeSlug from '../../utility/makeSlug';

const AddProduct = ({ show, hide }) => {

    const dispatch = useDispatch()

    // Init input state
    const [ input, setInput ] = useState({})

    // Update init state
    const handleInput = (e) => {
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value }))
    }

    // Update Tag state
    let tag = []
    const handleTag = (e) => {
        
        if (e.target.checked) {
            tag.push(e.target.value)
        } else {
            const data = tag.filter(data => data !== e.target.value)
            tag = data
        }
    }

    let store = []
    const handleStore = (e) => {
        
        if (e.target.checked) {
            store.push(e.target.value)
        } else {
            const data = store.filter(data => data !== e.target.value)
            store = data
        }
    }
    
    // Handle single photo
    // const handelPhoto = (e) => {
    //     setInput(prev => ({ ...prev, [e.target.name] : e.target.files[0] }))
    // }
    

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
        
        dispatch()
        
    }

  return (
    <div>
        <Modal show={ show } onHide={ hide } centered>
            <Modal.Header closeButton>
                <h3>Add Product</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Row>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={ handleInput } type='text' placeholder='Product name'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='6'>
                            <Form.Label>Regular Price</Form.Label>
                            <Form.Control onChange={ handleInput } type='number' placeholder='$$'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='6'>
                            <Form.Label>Sell Price</Form.Label>
                            <Form.Control onChange={ handleInput } type='number' placeholder='$$'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Select onChange={ handleInput }>
                                <option >Select Brand</option>
                                <option value='RFL' >RFL</option>
                                <option value='PUMA' >PUMA</option>
                                <option value='hp' >hp</option>
                                <option value='jamdany' >jamdany</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='8'>
                            <Form.Label>Category</Form.Label>
                            <Form.Select onChange={ handleInput }>
                                <option >Select Category</option>
                                <option value='Man' >Man</option>
                                <option value='Woman' >Woman</option>
                                <option value='Kids' >Kids</option>
                                <option value='Electronic' >Electronic</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='4'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control onChange={ handleInput } type='number' placeholder='Available quantity'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tags</Form.Label><br />
                            <Form.Check onClick={ handleTag } value='Eid' type='checkbox' label='Eid' inline />
                            <Form.Check onClick={ handleTag } value='Pojo' type='checkbox' label='Pojo' inline />
                            <Form.Check onClick={ handleTag } value='Malaria' type='checkbox' label='Malaria' inline />
                            <Form.Check onClick={ handleTag } value='Korbani' type='checkbox' label='Korbani' inline />
                            <Form.Check onClick={ handleTag } value='Salami' type='checkbox' label='Salami' inline />
                            <Form.Check onClick={ handleTag } value='Hoz' type='checkbox' label='Hoz' inline />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Store</Form.Label><br />
                            <Form.Check onClick={ handleStore } value='JKO' type='checkbox' label='JKO' inline />
                            <Form.Check onClick={ handleStore } value='Al-Fadia' type='checkbox' label='Al-Fadia' inline />
                            <Form.Check onClick={ handleStore } value='Islamia' type='checkbox' label='Islamia' inline />
                            <Form.Check onClick={ handleStore } value='Khaza Store' type='checkbox' label='Khaza Store' inline />
                        </Form.Group>
                        <Form.Group className='mb-3 text-end'>
                            <Button onClick={ hide } variant='secondary me-2'>Close</Button>
                            <Button type='submit' onClick={ hide } >Create</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddProduct