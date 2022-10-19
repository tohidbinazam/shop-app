import React from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductQuickView from '../../components/product/ProductQuickView';
import { quickShow } from '../../redux/modal/action';
import './Shop.css'

const Shop = () => {

    const dispatch = useDispatch()
    
    const { single_product } = useSelector(state => state.product)

  return (
    <div>
        <Container>
            <Row>
                <Col md='3'>
                    { single_product && <ProductQuickView /> }
                    <Card>
                        <Card.Body>
                            <div className="search">
                                <h4>Search here</h4>
                                <Form.Control type='text' placeholder='Search key word' />
                            </div>

                            <div className="category-search my-4">
                                <h4>Category</h4>
                                <ListGroup>
                                    <ListGroup.Item>Man</ListGroup.Item>
                                    <ListGroup.Item>Woman</ListGroup.Item>
                                    <ListGroup.Item>Kids</ListGroup.Item>
                                </ListGroup>
                            </div>

                            <div className="brand-search">
                                <h4>Brand</h4>
                                <Form.Check type='checkbox' label="RFL"/>
                                <Form.Check type='checkbox' label="Jamuna"/>
                                <Form.Check type='checkbox' label="Padma"/>
                            </div>

                            <div className="brand-search my-3">
                                <h4>Tags</h4>
                                <div className="all-tags">
                                    <a href="http://tohid">Eid</a>
                                    <a href="http://tohid">Puja</a>
                                    <a href="http://tohid">Asura</a>
                                    <a href="http://tohid">Dress</a>
                                </div>
                            </div>

                            <div className="price-search my-3">
                                <h4>Price</h4>
                                <hr />
                                <div className='d-flex justify-content-between gap-3'>
                                    <div>
                                        <h5>Min</h5>
                                        <Form.Range min='50' max='10000'/>
                                    </div>
                                    <div>
                                        <h5>Max</h5>
                                        <Form.Range min='50' max='10000'/>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md='9'>
                    <h3>Products</h3>
                    <Row>
                        <Col md='4'>
                            <Card className='my-3'>
                                <Card.Img variant='top' src='https://asia.canon/media/image/2022/05/23/2082b02be46045ad950d44b82c402a14_EOS+R10+w+RF-S18-150mm+f3.5-6.3+IS+STM+Front+Slant.png' />
                                <Card.Body>
                                <hr />
                                    <Card.Title>Sony A83s</Card.Title>
                                    <h6>Regular price : $ 3800</h6>
                                    <h5>Sell price : $ 3200</h5>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button onClick={ () => dispatch(quickShow()) } > Quick view </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Card className='my-3'>
                                <Card.Img variant='top' src='https://asia.canon/media/image/2022/05/23/2082b02be46045ad950d44b82c402a14_EOS+R10+w+RF-S18-150mm+f3.5-6.3+IS+STM+Front+Slant.png' />
                                <Card.Body>
                                <hr />
                                    <Card.Title>Sony A83s</Card.Title>
                                    <h6>Regular price : $ 3800</h6>
                                    <h5>Sell price : $ 3200</h5>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button onClick={ () => dispatch( quickShow() ) } > Quick view </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Card className='my-3'>
                                <Card.Img variant='top' src='https://asia.canon/media/image/2022/05/23/2082b02be46045ad950d44b82c402a14_EOS+R10+w+RF-S18-150mm+f3.5-6.3+IS+STM+Front+Slant.png' />
                                <Card.Body>
                                <hr />
                                    <Card.Title>Sony A83s</Card.Title>
                                    <h6>Regular price : $ 3800</h6>
                                    <h5>Sell price : $ 3200</h5>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button> Quick view </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Card className='my-3'>
                                <Card.Img variant='top' src='https://asia.canon/media/image/2022/05/23/2082b02be46045ad950d44b82c402a14_EOS+R10+w+RF-S18-150mm+f3.5-6.3+IS+STM+Front+Slant.png' />
                                <Card.Body>
                                <hr />
                                    <Card.Title>Sony A83s</Card.Title>
                                    <h6>Regular price : $ 3800</h6>
                                    <h5>Sell price : $ 3200</h5>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button> Quick view </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Shop