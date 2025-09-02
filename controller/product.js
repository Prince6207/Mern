const fs=require('fs');
const path=require("path")
const model=require(path.resolve(__dirname,"model/product.js"));
const Product=model.Product;
exports.createproduct=async(req,res)=>{
    const product=new Product(req.body);
    try{
        const doc=await product.save();
        res.status(201).json(product);
    }catch(err){
        res.status(400).json(err);
    }
};
exports.getallproduct=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json(products);
};
exports.getproduct=async(req,res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    res.status(200).json(product);
};
exports.replaceproduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findOneAndReplace({_id:id},req.body,{new:true});
        res.status(200).json(doc);
    }catch(err){
        res.status(400).json(err);
    }
};
exports.updateproduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(doc);
    }catch(err){
        res.status(400).json(err);
    }
};
exports.deleteproduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findByIdAndDelete(id);
        res.status(200).json(doc);
    }catch(err){
        res.status(400).json(err);
    }
};