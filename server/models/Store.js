import mongoose from "mongoose";
const { Schema, model } = mongoose;


const storeModal = Schema({
    name:{
        type : String,
        required : [ true, 'Name is required'],
        trim : true,
        unique : true
    },
    city:{
        type : String,
        required : [ true, 'Store location City is required']
    },
    owner:{
        type : String,
        required : [ true, 'Store owner name is required'],
        trim : true
    },
    owner_number:{
        type : String,
        required : [ true, 'Owner number is required'],
        unique : [true, 'Owner number is required'],
        trim : true
    },
    slug:{
        type: String,
        required : true,
        unique : true,
        trim : true
    },
    photo: {
        type: String,
        required : true,
        unique : true,
    }

},{ timestamps : true })


export default model('Store', storeModal)