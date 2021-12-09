import express from "express";
export const listRouter = express.Router();
import {listController} from "../controller/listController.js";

const lc = new listController();

listRouter.post("/create", lc.addList);
listRouter.get(":id", lc.getListByUser);