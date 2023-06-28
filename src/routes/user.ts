import express from "express";
import userController from "../controllers/userController";

const routeUser = express.Router();

routeUser.post("/cadastro", userController);

export default routeUser;