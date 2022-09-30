import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import AddTag from './AddTag';

const Tags = () => {

    // Init modal useState
    const [show, setShow] = useState()

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    
    
  return (
    <div> 
        <AddTag show={show} hide={handleHide}/>
        <div className='d-flex justify-content-between my-3'>
            <h3>Tags</h3>
            <Button onClick={handleShow} > Add new Tag </Button>
        </div>
        <Table striped hover bordered variant='dark'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Tag Products</th>
                    <th>Tags Stock</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>parus</td>
                    <td>330</td>
                    <td>32</td>
                    <td>parus</td>
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

export default Tags