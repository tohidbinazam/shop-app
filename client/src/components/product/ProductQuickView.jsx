import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modalHide } from '../../redux/modal/action';

const ProductQuickView = () => {

    const { product_modal } = useSelector(state => state)
    
    const dispatch = useDispatch()

  return (
    <div>
        <Modal show= { product_modal } onHide= { () => dispatch(modalHide()) } centered>
            <Modal.Header closeButton>
                <h3>Product info</h3>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col><img style={{ width : '100%' }} src="https://asia.canon/media/image/2022/05/23/2082b02be46045ad950d44b82c402a14_EOS+R10+w+RF-S18-150mm+f3.5-6.3+IS+STM+Front+Slant.png" alt="" /></Col>
                    <Col>
                    <h6>Name: Sony A4s ultra</h6><hr />
                    <h6>Category: Electronic</h6><hr />
                    <h6>Brand: Sony Global</h6><hr />
                    <h6>Stock: 50</h6>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ () => dispatch(modalHide()) } variant='secondary'>Close</Button>
                <Button>Product Details</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ProductQuickView