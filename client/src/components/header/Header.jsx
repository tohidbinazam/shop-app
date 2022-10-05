import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadingStart } from '../../redux/loading-bar/action';
import './Header.css'

const Header = () => {


    const dispatch = useDispatch()

  return (
    <div className='mb-4'>
        <Container>
            <Row>
                <Col md='4'>
                    <img style={{ width : '250px' }} src="https://www.coywolf.news/wp-content/uploads/2020/05/og-shop-app.png" alt="" />
                </Col>
            </Row>
        </Container>
        
        <div className="bg-dark">
            <Container>
                <Row>
                    <Col md='12'>
                        <div className='menu'>
                            <ul>
                                <li><Link onClick={() => dispatch(loadingStart())} to="/">Home</Link></li>
                                <li><a href="https://to">About</a></li>
                                <li><a href="https://to">Contact</a></li>
                                <li><a href="https://to">Blog</a></li>
                                <li><Link onClick={() => dispatch(loadingStart())} to="/admin">Admin</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Header