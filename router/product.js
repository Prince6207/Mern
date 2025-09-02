const express=require("express")
const path=require("path")
const productcontroller=require(path.resolve(__dirname,"router/product.js"));
const router=express.Router();
router
.post("/",productcontroller.createproduct)
.get("/",productcontroller.getallproduct)
.get("/:id",productcontroller.getproduct)
.put("/:id",productcontroller.replaceproduct)
.patch("/:id",productcontroller.updateproduct)
.delete("/:id",productcontroller.deleteproduct);
exports.router=router