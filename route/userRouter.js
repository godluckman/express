import express from "express";
import {addUser, getUsers} from "../controller/userController.js";
export const userRouter = express.Router();



userRouter.use("/create", addUser);
userRouter.use("/", getUsers);