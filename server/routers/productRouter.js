import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productController.js';

const Router = express.Router()


Router.route('/').get(getAllProducts).post(createProduct)
Router.get('/:slug', getSingleProduct)
Router.route('/:id').patch(updateProduct).delete(deleteProduct)


export default Router