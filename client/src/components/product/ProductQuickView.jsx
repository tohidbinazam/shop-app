import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { quickHide } from '../../redux/modal/action';

const ProductQuickView = () => {

    const { product_modal, product } = useSelector(state => state)

    const { name, category, brand, stock, stores, photo } = product.single_product

    const dispatch = useDispatch()

  return (
    <div>
        <Modal show= { product_modal } onHide= { () => dispatch(quickHide()) } centered>
            <Modal.Header closeButton>
                <h3>Product info</h3>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col><img style={{ width : '100%', height: '220px', objectFit: 'cover' }} src={`http://localhost:5050/images/products/photos/${ photo }`} alt="" /></Col>
                    <Col>
                    <h6>Name: { name }</h6><hr />
                    <h6>Category: { category.name }</h6><hr />
                    <h6>Brand: { brand.name }</h6><hr />
                    <h6>Stock: { stock }</h6><hr />
                    <h6>Stores: { stores.map(data => 
                                `${ data.name }, `
                            )
                        }
                    </h6>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ () => dispatch(quickHide()) } variant='secondary'>Close</Button>
                <Button>Product Details</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ProductQuickView