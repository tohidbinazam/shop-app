import mongoose from "mongoose";
const { Schema, model } = mongoose;


const categoryModal = Schema({
    name :{
        type : String,
        required : [ true, 'Name is required'],
        trim : true,
        unique: true
    },
    slug:{
        type: String,
        required : true,
        unique : true,
        trim: true
    }

},{ timestamps : true })


export default model('Category', categoryModal)