import Category from "../models/Category.js";
import createError from "../utility/error/createError.js";

export const getAllCategories = async (req, res, next ) => {

    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        next(error)
    }
    
}

export const createCategory = async (req, res, next) => {

    const { name } = req.body
    try {
        const check = await Category.find().or([{ name }])
        if (check.length) {
            return next(createError(406, 'Already exist this Category'))
        }
        const category = await Category.create(req.body)
        res.status(201).json(category)
    } catch (error) {
        next(error)
    }

}

export const getSingleCategory = async (req, res, next) => {

    const { slug } = req.params

    try {
        const category = await Category.findOne({ slug })
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }

}

export const updateCategory = async (req, res, next) => {

    const { id } = req.params

    try {
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }

}

export const deleteCategory = async (req, res, next) => {

    const { id } = req.params

    try {
        const category = await Category.findByIdAndDelete(id)
        res.status(200).json('Category Delete Successfully')
    } catch (error) {
        next(error)
    }

}