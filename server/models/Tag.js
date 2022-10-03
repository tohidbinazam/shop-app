import mongoose from "mongoose";
const { Schema, model } = mongoose;


const tagModal = Schema({
    name :{
        type : String,
        required : [ true, 'Name is required'],
        unique : true,
        trim : true,
    },
    slug:{
        type: String,
        required : true,
        unique : true,
        trim: true
    }

},{ timestamps : true })


export default model('Tag', tagModal)