import mongoose from "mongoose";
const { Schema, model } = mongoose;


const storeModal = Schema({
    name:{
        type : String,
        required : [ true, 'Name is required'],
        trim : true,
        unique : [ true, 'Already exist this store' ]
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
        required : [ true, 'Owner number is required' ],
        unique : [ true, 'Already exist this number' ],
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
        required : true
    }

},{ timestamps : true })


export default model('Store', storeModal)