import express from 'express'
import { createCategory, deleteCategory, getAllCategories, getSingleCategory, updateCategory } from '../controllers/categoryController.js';

const Router = express.Router()


Router.route('/').get(getAllCategories).post(createCategory)
Router.get('/:slug', getSingleCategory)
Router.route('/:id').patch(updateCategory).delete(deleteCategory)


export default Router