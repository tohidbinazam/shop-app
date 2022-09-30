import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddBrand = ({ show, hide }) => {

  return (
    <div>
        <Modal show={ show } onHide={ hide } centered>
            <Modal.Header closeButton>
                <h3>Create Brand</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Brand name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Origin</Form.Label>
                        <Form.Select>
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
                        <Form.Control type='text' placeholder='Distributor company name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Company number</Form.Label>
                        <Form.Control type='text' placeholder='Company contact number'/>
                    </Form.Group>
                    <Form.Group className='mb-3 text-end'>
                        <Button onClick={ hide } variant='secondary me-2'>Close</Button>
                        <Button>Create</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddBrand