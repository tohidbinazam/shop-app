import express from 'express'
import multer from 'multer';
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productController.js';
import path from 'path'


const Router = express.Router()

const storage = multer.diskStorage({
    destination : (req, file, cb) => {

        if (file.fieldname == 'photo') {
            cb(null, 'server/public/images/products/photos')
        } else {
            console.log('Invalid field');
        }
    },
    filename : (req, file, cb) => {

        if (file.fieldname == 'photo') {
            const ext = path.extname(file.originalname)
            let date = new Date()
            const unique_prefix = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}` 
            const name =`${file.fieldname}_${unique_prefix}_${Date.now()}${ext}`
        
            cb(null, name)

        }else{
            console.log('Invalid field');
        }
    }
})


const upload = multer({
    storage,
    limits : 1024*1024*5,

    fileFilter : (req, file, cb) => {
        
        if (file.fieldname == 'photo') {
            if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
                cb(null, true)
            } else {
                console.log('Invalid file type');
            }
        } else {
            console.log('Invalid field');
        }
    }
    
}).fields([
    {name: 'photo', maxCount : 1}
])


Router.route('/').get(getAllProducts).post(upload, createProduct)
Router.get('/:slug', getSingleProduct)
Router.route('/:id').patch(upload, updateProduct).delete(deleteProduct)


export default Router