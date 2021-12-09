import express from "express";
import {userController} from "../controller/userController.js";
export const userRouter = express.Router();


const userContoller = new userController()



userRouter.post("/create", userContoller.addUser);
userRouter.get("/get", userContoller.getUsers);
//TODO userRouter.put("/update", userContoller.updateUser);
userRouter.delete("/delete", userContoller.deleteUser);

userRouter.use(function (req, res, next) {
    res.status(404).send("Not Found")
});