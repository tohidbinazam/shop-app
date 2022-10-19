import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteStore, modalShow, singleStore } from '../../redux/store/action';
import TableSkeleton from '../../utility/TableSkeleton';
import AddStore from './AddStore';

const Store = () => {

    const dispatch = useDispatch()

    const { stores, skeleton } = useSelector(state => state.store)
    
  return (
    <div>
        <AddStore/>
        <div className='d-flex justify-content-between my-3'>
            <h3>Stores</h3>
            <Button onClick={() => dispatch(modalShow())}> Add New Store </Button>
        </div>
        <Table striped hover bordered variant='dark' className='text-center'>
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
                { skeleton.status && <TableSkeleton /> }
                {
                    stores.map((data, index) => 
                        <tr>
                            <td>{ index + 1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.city }</td>
                            <td>{ data.owner }</td>
                            <td>{ data.owner_number }</td>
                            <td>{ data.slug }</td>
                            <td><img className='table-image' src={`http://localhost:5050/images/stores/photos/${data.photo}`} alt={data.name}/></td>
                            
                            <td>
                                <Button onClick={ () => dispatch(singleStore(data._id)) } variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                                <Button onClick={ () => dispatch(deleteStore(data._id)) } variant='danger'><FaTrashAlt /> Delete</Button>
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