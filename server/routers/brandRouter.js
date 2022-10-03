import express from 'express'
import { createBrand, deleteBrand, getAllBrands, getSingleBrand, updateBrand } from '../controllers/brandController.js';

const Router = express.Router()


Router.route('/').get(getAllBrands).post(createBrand)
Router.get('/:slug', getSingleBrand)
Router.route('/:id').patch(updateBrand).delete(deleteBrand)


export default Router