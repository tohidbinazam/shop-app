import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand, modalShow, singleBrand } from '../../redux/brand/action';
import TableSkeleton from '../../utility/TableSkeleton';
import AddBrand from './AddBrand';

const Brands = () => {

    const dispatch = useDispatch()

    const { brands, skeleton } = useSelector(state => state.brand)

  return (
    <div> 
        <AddBrand/>
        <div className='d-flex justify-content-between my-3'>
            <h3>Brands</h3>
            <Button onClick={() => dispatch(modalShow())}> Add new Brand </Button>
        </div>
        <Table striped hover bordered variant='dark' className='text-center'>
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
                { skeleton.status && <TableSkeleton /> }
                {
                    brands.map((data, index) => 
                        <tr>
                            <td>{ index + 1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.origin }</td>
                            <td>{ data.local_distributor }</td>
                            <td>{ data.company_number }</td>                       
                            <td>
                                <Button onClick={ () => dispatch(singleBrand(data._id)) } variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                                <Button onClick={ () => dispatch(deleteBrand(data._id)) } variant='danger'><FaTrashAlt /> Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>   
    </div>
  )
}

export default Brands