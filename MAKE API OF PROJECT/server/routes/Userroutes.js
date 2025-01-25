const express=require("express");
const Auth = require("../middleware/authetication");
const { logger } = require("../middleware/userlogger");
const validatorrole = require("../middleware/validator");
const { UsergetAll, UserGetByid, AddtheUser, Logintheuser, UserDeleteByid, UpdatetheUserbyid } = require("../controller/user.controller");


expressRouter=express.Router();
expressRouter.get("/User",Auth,UsergetAll)
expressRouter.get("/User/:id",UserGetByid)
expressRouter.post("/Usercreate",AddtheUser)
expressRouter.post("/Usersignup",Auth,logger,Logintheuser)
expressRouter.delete("/Userdelete/:id",Auth,validatorrole,UserDeleteByid)
expressRouter.patch("/UserUpdate/:id",Auth,validatorrole,UpdatetheUserbyid)
module.exports={expressRouter}