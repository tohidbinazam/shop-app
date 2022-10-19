import mongoose from "mongoose";
const { Schema, model } = mongoose;


const ProductModal = Schema({
    name :{
        type : String,
        required : [ true, 'Name is required'],
        unique : true,
        trim : true
    },
    regular_price :{
        type : Number,
        required : [ true, 'Regular Price is required']
    },
    sell_price :{
        type : Number,
    },
    category:{
        type : Schema.Types.ObjectId,
        ref: 'Category',
        required : true,
    },
    tags:{
        type : [Schema.Types.ObjectId],
        ref: 'Tag',
        required : true,
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required : true
    },
    stock:{
        type: Number,
        min : [ 10, 'Minimum Quantity is 10']
    },
    stores:{
        type: [Schema.Types.ObjectId],
        ref: 'Store'
    },
    slug:{
        type: String,
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
        maxLength : [ 30, 'Maximum length is 10']
    },
    long_desc:{
        type: String,
        required : true
    }

},{ timestamps : true })


export default model('Product', ProductModal)