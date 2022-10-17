import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTag, modalShow, singleTag } from '../../redux/tag/action';
import TableSkeleton from '../../utility/TableSkeleton';
import AddTag from './AddTag';

const Tags = () => {

    // modal Dispatch
    const dispatch = useDispatch()

    const { tags, skeleton } = useSelector(state => state.tag)
    
    
  return (
    <div> 
        <AddTag />
        <div className='d-flex justify-content-between my-3'>
            <h3>Tags</h3>
            <Button onClick={() => dispatch(modalShow())} > Add new Tag </Button>
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
                { skeleton.status && <TableSkeleton /> }
                {
                    tags.map((data, index) => 
                        <tr>
                            <td>{ index + 1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.origin }</td>
                            <td>{ data.local_distributor }</td>
                            <td>{ data.slug }</td>                       
                            <td>
                                <Button onClick={ () => dispatch(singleTag(data._id)) } variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                                <Button onClick={ () => dispatch(deleteTag(data._id)) } variant='danger'><FaTrashAlt /> Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>   
    </div>
  )
}

export default Tags