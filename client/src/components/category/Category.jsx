import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import AddCategory from './AddCategory';

const Category = () => {

    // Init modal useState
    const [show, setShow] = useState()

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    
    
  return (
    <div> 
        <AddCategory show={show} hide={handleHide} />
        <div className='d-flex justify-content-between my-3'>
            <h3>Category</h3>
            <Button onClick={handleShow} > Add new Category </Button>
        </div>
        <Table striped hover bordered variant='dark'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Category Products</th>
                    <th>Category Stock</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Man</td>
                    <td>330</td>
                    <td>32</td>
                    <td>man</td>
                    <td>
                        <Button variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                        <Button variant='danger'><FaTrashAlt /> Delete</Button>
                    </td>
                </tr>
            </tbody>
        </Table>   
    </div>
  )
}

export default Category