import Store from "../models/Store.js";
import fs from 'fs'

export const getAllStores = async (req, res, next ) => {

    try {
        const stores = await Store.find()
        res.status(200).json(stores)
    } catch (error) {
        next(error)
    }
    
}

export const createStore = async (req, res, next) => {

    const { photo } = req.files

    const main_photo = photo[0].filename

    try {
        const store = await Store.create({ ...req.body, photo: main_photo})
        res.status(201).json(store)
    } catch (error) {
        next(error)
    }

}

export const getSingleStore = async (req, res, next) => {

    const { slug } = req.params

    try {
        const store = await Store.findOne({ slug })
        res.status(200).json(store)
    } catch (error) {
        next(error)
    }

}

export const updateStore = async (req, res, next) => {

    const { id } = req.params

    if (req.files.photo) {

        const { photo } = req.files
        const main_photo = photo[0].filename
        try {
            const store = await Store.findByIdAndUpdate(id, { ...req.body, photo : main_photo })
            fs.unlinkSync(`server/public/images/products/photos/${store.photo}`)
            res.status(200).json('Store update successfully')
        } catch (error) {
            next(error)
        }
        
    } else {
        try {
            await Store.findByIdAndUpdate(id, req.body, { new : true })
            res.status(200).json('Store update successfully')
        } catch (error) {
            next(error)
        }
    }

    

}

export const deleteStore = async (req, res, next) => {

    const { id } = req.params

    try {
        const store = await Store.findByIdAndDelete(id)
        fs.unlinkSync(`server/public/images/products/photos/${store.photo}`)
        res.status(200).json('Store Delete Successfully')
    } catch (error) {
        next(error)
    }

}