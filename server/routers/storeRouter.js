import express from 'express'
import { createStore, deleteStore, getAllStores, getSingleStore, updateStore } from '../controllers/storeController.js';

const Router = express.Router()


Router.route('/').get(getAllStores).post(createStore)
Router.get('/:slug', getSingleStore)
Router.route('/:id').patch(updateStore).delete(deleteStore)


export default Router