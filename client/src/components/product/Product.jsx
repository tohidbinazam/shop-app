import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, modalShow, singleProduct } from '../../redux/product/action';
import { quickShow } from '../../redux/modal/action';
import AddProduct from './AddProduct';
import TableSkeleton from '../../utility/TableSkeleton';

const Product = () => {

    const dispatch = useDispatch()

    const { products, skeleton } = useSelector(state => state.product)
    
    
  return (
    <div> 
        <AddProduct />
        <div className='d-flex justify-content-between my-3'>
            <h3>Products</h3>
            <Button onClick={ () => dispatch(modalShow()) } > Add new product </Button>
        </div>
        <Table striped hover bordered variant='dark' className='text-center'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Regular Price</th>
                    <th>Sell Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Stock</th>
                    <th>Photo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { skeleton.status && <TableSkeleton /> }
                {
                    products.map((data, index) => 
                        <tr>
                            <td>{ index + 1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.regular_price }</td>
                            <td>{ data.sell_price }</td>
                            <td>{ data.category.name }</td>
                            <td>{ data.brand.name }</td>
                            <td>{ data.stock }</td>
                            <td><img className='table-image' src={`http://localhost:5050/images/products/photos/${data.photo}`} alt={data.name}/></td>
                            
                            <td>
                                <Button onClick={ () => dispatch( quickShow() ) } ><FaEye /> view</Button> 
                                <Button onClick={ () => dispatch(singleProduct(data._id)) } variant='warning' className='mx-2'><FaRegEdit /> Edit</Button>
                                <Button onClick={ () => dispatch(deleteProduct(data._id)) } variant='danger'><FaTrashAlt /> Delete </Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>   
    </div>
  )
}

export default Product