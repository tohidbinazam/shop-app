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

    const { photo } = req.files

    const main_photo = photo[0].filename
    console.log(req.body);

    try {
        await Store.create({ ...req.body, photo: main_photo})
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

    // const { photo } = req.files
    // const main_photo = photo[0].filename
    
    try {
        await Store.findByIdAndUpdate(id, { ...req.body }, { new: true })
        res.status(200).json('Store update successfully')
    } catch (error) {
        next(error)
    }

}

export const deleteStore = async (req, res, next) => {

    const { id } = req.params

    try {
        await Store.findByIdAndDelete(id)
        res.status(200).json('Store Delete Successfully')
    } catch (error) {
        next(error)
    }

}