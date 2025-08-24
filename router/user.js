const express=require("express")
const usercontroller=require("../controller/user");
const router=express.Router();
router
.post("/",usercontroller.createuser)
.get("/",usercontroller.getallusers)
.get("/:id",usercontroller.getuser)
.put("/:id",usercontroller.replaceuser)
.patch("/:id",usercontroller.updateuser)
.delete("/:id",usercontroller.deleteuser);
exports.router=router