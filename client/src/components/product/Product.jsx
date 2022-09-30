import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { modalShow } from '../../redux/modal/action';
import { useDispatch } from 'react-redux'
import AddProduct from './AddProduct';

const Product = () => {

    const dispatch = useDispatch()

    // Init modal useState
    const [show, setShow] = useState()

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    
    
  return (
    <div> 
        <AddProduct show={show} hide={handleHide} />
        <div className='d-flex justify-content-between my-3'>
            <h3>Products</h3>
            <Button onClick={handleShow} > Add new product </Button>
        </div>
        <Table striped hover bordered variant='dark'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Regular Price</th>
                    <th>Sell Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Stock</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Sony A4s</td>
                    <td>3300</td>
                    <td>3200</td>
                    <td>Laptop</td>
                    <td>RFL pis</td>
                    <td>50</td>
                    <td>sony-a4s</td>
                    <td>
                        <Button onClick={ () => dispatch( modalShow() ) } ><FaEye /> view</Button> 
                        <Button variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                        <Button variant='danger'><FaTrashAlt /> Delete</Button>
                    </td>
                </tr>
            </tbody>
        </Table>   
    </div>
  )
}

export default Product