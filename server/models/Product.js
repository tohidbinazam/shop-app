import mongoose from "mongoose";
const { Schema, model } = mongoose;


const ProductModal = Schema({
    name :{
        type : String,
        required : [ true, 'Name is required'],
        trim : true
    },
    regular_price :{
        type : Number,
        required : [ true, 'Regular Price is required']
    },
    sell_price :{
        type : Number,
        required : [ true, 'Sell Price Price is required']
    },
    // category:{
    //     type : Schema.Types.ObjectId,
    //     required : true,
    // },
    // tag:{
    //     type : [Schema.Types.ObjectId],
    //     required : true,
    // },
    // brand:{
    //     type: Schema.Types.ObjectId,
    //     required : true
    // },
    stock:{
        type: Number,
        required : true,
        min : [ 10, 'Minimum Quantity is 10']
    },
    // store:{
    //     type: [Schema.Types.ObjectId],
    //     required : true
    // },
    slug:{
        type: String,
        required : true,
        trim : true
    },
    photo:{
        type: String,
        default : 'product.png'
    },
    gallery:{
        type: Array
    },
    status : {
        type : Boolean,
        default : true
    },
    short_desc:{
        type: String,
        maxLength : [ 30, 'Maximum length is 10'],
        required : true
    },
    long_desc:{
        type: String,
        required : true
    }

},{ timestamps : true })


export default model('Product', ProductModal)