import React from 'react'
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import AddStore from './AddStore';

const Stores = () => {

    // Init modal useState
    const [show, setShow] = useState()

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)

    const { store } = useSelector(state => state)

    console.log(store);
    
    
  return (
    <div>
        <AddStore show={show} hide = { handleHide }/>
        <div className='d-flex justify-content-between my-3'>
            <h3>Stores</h3>
            <Button onClick={handleShow}> Add New Store </Button>
        </div>
        <Table striped hover bordered variant='dark'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Stores Product</th>
                    <th>Store Stock</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Mofiz Enterprize</td>
                    <td>130</td>
                    <td>50</td>
                    <td>mofiz-enterprize</td>
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

export default Stores