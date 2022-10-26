import React from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductQuickView from '../../components/product/ProductQuickView';
import { quickShow } from '../../redux/product/action';
import './Shop.css'

const Shop = () => {

    const dispatch = useDispatch()
    
    const { product, category, tag, brand, store } = useSelector(state => state)

    const { products, single_product } = product

    // Category state
    const { categories } = category

    // Tag state
    const { tags } = tag

    // Brand state
    const { brands } = brand

    // Store state
    const { stores } = store

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
                                    {
                                        categories.map(data => 
                                                <ListGroup.Item>{ data.name }</ListGroup.Item>
                                            )
                                    }
                                </ListGroup>
                            </div>

                            <Row>
                                <Col md='6'>
                                    <div className="brand-search">
                                        <h4>Brand</h4>
                                        {
                                            brands.map((data, index) =>
                                                    <Form.Check id={`brandCheckbox${1 + index}`} onClick={ '' } value={ data._id } type='checkbox' label={ data.name } />
                                                )
                                        }
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className="brand-search">
                                        <h4>Stores</h4>
                                        {
                                            stores.map((data, index) =>
                                                    <Form.Check id={`storesCheckbox${1 + index}`} onClick={ '' } value={ data._id } type='checkbox' label={ data.name } />
                                                )
                                        }
                                    </div>
                                </Col>
                            </Row>
                        
                            <div className="brand-search my-3">
                                <h4>Tags</h4>
                                <div className="all-tags">
                                    {
                                        tags.map(data => 
                                                <a href="http://tohid">{ data.name }</a>
                                            )
                                    }
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
                        {
                            products.map(data => 
                                    <Col md='4'>
                                        <Card className='my-3'>
                                            <Card.Img style={{ width : '100%', height: '300px', objectFit: 'cover' }} variant='top' src={`images/products/photos/${ data.photo }`} />
                                            <Card.Body>
                                            <hr />
                                                <Card.Title>{ data.name }</Card.Title>
                                                <h6>Regular price : $ { data.regular_price }</h6>
                                                <h5>Sell price : $ { data.sell_price }</h5>
                                            </Card.Body>
                                            <Card.Footer className='text-end'>
                                                <Button onClick={ () => dispatch(quickShow(data._id)) } > Quick view </Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Shop