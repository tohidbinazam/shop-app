import Tag from "../models/Tag.js";

export const getAllTags = async (req, res, next ) => {

    try {
        const tags = await Tag.find()
        res.status(200).json(tags)
    } catch (error) {
        next(error)
    }
    
}

export const createTag = async (req, res, next) => {

    try {
        const tag = await Tag.create(req.body)
        res.status(201).json(tag)
    } catch (error) {
        next(error)
    }

}

export const getSingleTag = async (req, res, next) => {

    const { slug } = req.params

    try {
        const tag = await Tag.findOne({ slug })
        res.status(200).json(tag)
    } catch (error) {
        next(error)
    }

}

export const updateTag = async (req, res, next) => {

    const { id } = req.params

    try {
        const tag = await Tag.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(tag)
    } catch (error) {
        next(error)
    }

}

export const deleteTag = async (req, res, next) => {

    const { id } = req.params

    try {
        const tag = await Tag.findByIdAndDelete(id)
        res.status(200).json(tag)
    } catch (error) {
        next(error)
    }

}