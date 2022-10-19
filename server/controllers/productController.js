import Product from "../models/Product.js";
import fs from 'fs'
import createError from "../utility/error/createError.js";

export const getAllProducts = async (req, res, next ) => {

    try {
        const products = await Product.find().populate(['category', 'tags', 'brand', 'stores'])
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
    
}

export const createProduct = async (req, res, next) => {

    const { photo } = req.files
    const { name, tag, store } = req.body

    const main_photo = photo[0].filename

    const tags = JSON.parse(tag)
    const stores = JSON.parse(store)
    
    try {
        const check = await Product.find({ name })

        if (check.length) {
            fs.unlinkSync(`server/public/images/products/photos/${main_photo}`)
            return next(createError(406, 'Already exist this Product'))
        }
        const nw_pro = await Product.create({...req.body, tags, stores, photo: main_photo})
        const product = await Product.findById(nw_pro._id).populate([ { path: 'tags', select: ['name', 'slug'] }, { path: 'stores', select: 'name' }, 'category', 'brand' ])
        res.status(201).json(product)
    } catch (error) {
        next(error)
    }

}

export const getSingleProduct = async (req, res, next) => {

    const { slug } = req.params

    try {
        const product = await Product.findOne({ slug })
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }

}

export const updateProduct = async (req, res, next) => {

    const { id } = req.params

    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }

}

export const deleteProduct = async (req, res, next) => {

    const { id } = req.params

    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }

}