import React from 'react'
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import AddStore from './AddStore';

const Store = () => {

    // Init modal useState
    const [show, setShow] = useState()

    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)

    const { stores } = useSelector(state => state.store)

  return (
    <div>
        <AddStore show={show} hide= { handleHide }/>
        <div className='d-flex justify-content-between my-3'>
            <h3>Stores</h3>
            <Button onClick={handleShow}> Add New Store </Button>
        </div>
        <Table striped hover bordered variant='dark'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Stores Product</th>
                    <th>Store Stock</th>
                    <th>Slug</th>
                    <th>Photo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    stores && stores.map((data, index) => 
                    <tr>
                        <td>{ index + 1 }</td>
                        <td>{data.name}</td>
                        <td>{data.city}</td>
                        <td>{data.owner}</td>
                        <td>{data.owner_number}</td>
                        <td>{data.slug}</td>
                        <td><img className='table-image' src={`http://localhost:5050/images/products/photos/${data.photo}`} alt={data.name}/></td>
                        
                        <td>
                            <Button variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                            <Button variant='danger'><FaTrashAlt /> Delete</Button>
                        </td>
                    </tr>
                    )
                }
                
            </tbody>
        </Table>   
    </div>
  )
}

export default Store