import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddTag = ({ show, hide }) => {

  return (
    <div>
        <Modal show={ show } onHide={ hide } centered>
            <Modal.Header closeButton>
                <h3>Create Tag</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Tag name'/>
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

export default AddTag