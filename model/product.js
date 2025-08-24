const mongoose = require('mongoose');
const {Schema}=mongoose;
const productSchema=new Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    category: {type:String,required:true},
    price: {type:Number,min:[0,"price cannot be negative"],required:true},
    discountPercentage: {type:Number,min:[0,"invalid min discount"],max:[50,"invalid max discount"]},
    rating:{type:Number,min:[0,"invalid min rating"],max:[5,"invalid max rating"]},
    stock: {type:Number,min:[0,"stock cannot be negative"],required:true},
    brand: {type:String},
    thumbnail:{type:String,required:true}
})
exports.Product=mongoose.model("Product",productSchema);