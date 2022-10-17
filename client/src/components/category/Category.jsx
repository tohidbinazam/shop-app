import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, modalShow, singleCategory } from '../../redux/category/action';
import TableSkeleton from '../../utility/TableSkeleton';
import AddCategory from './AddCategory';

const Category = () => {

    // modal Dispatch
    const dispatch = useDispatch()

    const { categories, skeleton } = useSelector(state => state.category)
    
    
  return (
    <div> 
        <AddCategory />
        <div className='d-flex justify-content-between my-3'>
            <h3>Category</h3>
            <Button onClick={ () => dispatch(modalShow()) } > Add new Category </Button>
        </div>
        <Table striped hover bordered variant='dark' className='text-center'>
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
                { skeleton.status && <TableSkeleton /> }
                {
                    categories.map((data, index) => 
                        <tr>
                            <td>{ index + 1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.origin }</td>
                            <td>{ data.local_distributor }</td>
                            <td>{ data.slug }</td>                       
                            <td>
                                <Button onClick={ () => dispatch(singleCategory(data._id)) } variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                                <Button onClick={ () => dispatch(deleteCategory(data._id)) } variant='danger'><FaTrashAlt /> Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>   
    </div>
  )
}

export default Category