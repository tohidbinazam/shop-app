import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddStore = ({ show, hide }) => {

  return (
    <div>
        <Modal show={ show } onHide={ hide } centered>
            <Modal.Header closeButton>
                <h3>Create Store</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Store name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='Store location'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner</Form.Label>
                        <Form.Control type='text' placeholder='Owner name'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Owner number</Form.Label>
                        <Form.Control type='text' placeholder='Owner contact number'/>
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

export default AddStore