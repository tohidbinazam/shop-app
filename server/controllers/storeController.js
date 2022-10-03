import Store from "../models/Store.js";

export const getAllStores = async (req, res, next ) => {

    try {
        const stores = await Store.find()
        res.status(200).json(stores)
    } catch (error) {
        next(error)
    }
    
}

export const createStore = async (req, res, next) => {

    try {
        await Store.create(req.body)
        res.status(201).json('Store Add Successfully')
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

    try {
        const store = await Store.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(store)
    } catch (error) {
        next(error)
    }

}

export const deleteStore = async (req, res, next) => {

    const { id } = req.params

    try {
        const store = await Store.findByIdAndDelete(id)
        res.status(200).json(store)
    } catch (error) {
        next(error)
    }

}