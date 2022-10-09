import React from 'react'
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProductQuickView from '../../components/product/ProductQuickView';
import Category from '../../components/category/Category';
import Product from '../../components/product/Product';
import Tags from '../../components/tag/Tags';
import Brands from '../../components/brand/Brands';
import Store from '../../components/store/Store';

const Admin = () => {


  return (
    <div>
        <Container>
            <Tab.Container defaultActiveKey='Products'>
                <Row>
                    <Col md='2'>
                        <ProductQuickView />
                        <Card>
                            <Card.Body>
                                    <Nav variant='pills' className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="Products">Products</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Category">Category</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Tags">Tags</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Brands">Brands</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Stores">Stores</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md='10'>
                        <Card>
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey='Products'>
                                        <Product />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='Category'>
                                        <Category />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='Tags'>
                                        <Tags />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='Brands'>
                                        <Brands />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='Stores'>
                                        <Store />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    </div>
  )
}

export default Admin