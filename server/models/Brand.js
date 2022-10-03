import mongoose from "mongoose";
const { Schema, model } = mongoose;


const brandModal = Schema({
    name :{
        type : String,
        required : [ true, 'Name is required'],
        trim : true,
        unique: true
    },
    origin :{
        type : String,
        required : [ true, 'Brand origin is required']
    },
    local_distributor :{
        type : String,
        required : [ true, 'Local Distributor company name is required'],
        unique : true,
        trim : true
    },
    company_number :{
        type : String,
        required : [ true, 'Local Distributor company number is required'],
        unique : [true, 'Company number is required'],
        trim : true
    },
    slug:{
        type: String,
        required : true,
        unique : true,
        trim : true
    },

},{ timestamps : true })


export default model('Brand', brandModal)