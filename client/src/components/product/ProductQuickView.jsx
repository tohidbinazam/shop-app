import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { quickHide } from '../../redux/product/action';

const ProductQuickView = () => {

    const { quick_view, single_product } = useSelector(state => state.product)

    const { name, category_name, brand_name, stock, stores, photo } = single_product

    const dispatch = useDispatch()

  return (
    <div>
        <Modal show= { quick_view } onHide= { () => dispatch(quickHide()) } centered>
            <Modal.Header closeButton>
                <h3>Product info</h3>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col><img style={{ width : '100%', height: '220px', objectFit: 'cover' }} src={`images/products/photos/${ photo }`} alt="" /></Col>
                    <Col>
                    <h6>Name: { name }</h6><hr />
                    <h6>Category: { category_name }</h6><hr />
                    <h6>Brand: { brand_name }</h6><hr />
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