const express=require("express")
const productcontroller=require("../controller/product");
const router=express.Router();
router
.post("/",productcontroller.createproduct)
.get("/",productcontroller.getallproduct)
.get("/:id",productcontroller.getproduct)
.put("/:id",productcontroller.replaceproduct)
.patch("/:id",productcontroller.updateproduct)
.delete("/:id",productcontroller.deleteproduct);
exports.router=router