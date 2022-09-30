import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import AddBrand from './AddBrand';

const Brands = () => {

    // Init modal useState
    const [show, setShow] = useState()

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    
    
  return (
    <div> 
        <AddBrand show={show} hide = { handleHide }/>
        <div className='d-flex justify-content-between my-3'>
            <h3>Brands</h3>
            <Button onClick={handleShow}> Add new Brand </Button>
        </div>
        <Table striped hover bordered variant='dark'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Brands Product</th>
                    <th>Brands Stock</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>PUMA</td>
                    <td>200</td>
                    <td>12</td>
                    <td>puma</td>
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

export default Brands