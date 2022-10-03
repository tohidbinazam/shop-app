import Brand from "../models/Brand.js";

export const getAllBrands = async (req, res, next ) => {

    try {
        const brands = await Brand.find()
        res.status(200).json(brands)
    } catch (error) {
        next(error)
    }
    
}

export const createBrand = async (req, res, next) => {

    try {
        const brand = await Brand.create(req.body)
        res.status(201).json(brand)
    } catch (error) {
        next(error)
    }

}

export const getSingleBrand = async (req, res, next) => {

    const { slug } = req.params

    try {
        const brand = await Brand.findOne({ slug })
        res.status(200).json(brand)
    } catch (error) {
        next(error)
    }

}

export const updateBrand = async (req, res, next) => {

    const { id } = req.params

    try {
        const brand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(brand)
    } catch (error) {
        next(error)
    }

}

export const deleteBrand = async (req, res, next) => {

    const { id } = req.params

    try {
        const brand = await Brand.findByIdAndDelete(id)
        res.status(200).json(brand)
    } catch (error) {
        next(error)
    }

}