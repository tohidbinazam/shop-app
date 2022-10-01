import Product from "../models/Product.js";

export const getAllProducts = async (req, res, next ) => {

    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
    
}

export const createProduct = async (req, res, next) => {

    try {
        const product = await Product.create(req.body)
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