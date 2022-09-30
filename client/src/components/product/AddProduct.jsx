import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const AddProduct = ({ show, hide }) => {


  return (
    <div>
        <Modal show={ show } onHide={ hide } centered>
            <Modal.Header closeButton>
                <h3>Add Product</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Product name'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='6'>
                            <Form.Label>Regular Price</Form.Label>
                            <Form.Control type='number' placeholder='$$'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='6'>
                            <Form.Label>Sell Price</Form.Label>
                            <Form.Control type='number' placeholder='$$'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Select>
                                <option >Select Brand</option>
                                <option value='RFL' >RFL</option>
                                <option value='PUMA' >PUMA</option>
                                <option value='hp' >hp</option>
                                <option value='jamdany' >jamdany</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='8'>
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option >Select Category</option>
                                <option value='Man' >Man</option>
                                <option value='Woman' >Woman</option>
                                <option value='Kids' >Kids</option>
                                <option value='Electronic' >Electronic</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='4'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type='number' placeholder='Available quantity'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tags</Form.Label><br />
                            <Form.Check type='checkbox' label='Eid' inline />
                            <Form.Check type='checkbox' label='Pojo' inline />
                            <Form.Check type='checkbox' label='Malaria' inline />
                            <Form.Check type='checkbox' label='Korbani' inline />
                            <Form.Check type='checkbox' label='Salami' inline />
                            <Form.Check type='checkbox' label='Hoz' inline />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Store</Form.Label><br />
                            <Form.Check type='checkbox' label='JKO' inline />
                            <Form.Check type='checkbox' label='Al-Fadia' inline />
                            <Form.Check type='checkbox' label='Islamia' inline />
                            <Form.Check type='checkbox' label='Khaza Store' inline />
                        </Form.Group>
                        <Form.Group className='mb-3 text-end'>
                            <Button onClick={ hide } variant='secondary me-2'>Close</Button>
                            <Button>Create</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddProduct