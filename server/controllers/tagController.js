import Tag from "../models/Tag.js";
import createError from "../utility/error/createError.js";

export const getAllTags = async (req, res, next ) => {

    try {
        const tags = await Tag.find()
        res.status(200).json(tags)
    } catch (error) {
        next(error)
    }
    
}

export const createTag = async (req, res, next) => {

    const { name } = req.body
    try {

        const check = await Tag.find().or([{ name }])
        if (check.length) {
            return next(createError(403, 'Already exist this tag'))
        }

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
        res.status(200).json('Tag update successfully')
    } catch (error) {
        next(error)
    }

}

export const deleteTag = async (req, res, next) => {

    const { id } = req.params

    try {
        const tag = await Tag.findByIdAndDelete(id)
        res.status(200).json('Tag Delete Successfully')
    } catch (error) {
        next(error)
    }

}