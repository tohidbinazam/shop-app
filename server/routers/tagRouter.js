import express from 'express'
import { createTag, deleteTag, getAllTags, getSingleTag, updateTag } from '../controllers/tagController.js';

const Router = express.Router()


Router.route('/').get(getAllTags).post(createTag)
Router.get('/:slug', getSingleTag)
Router.route('/:id').patch(updateTag).delete(deleteTag)


export default Router