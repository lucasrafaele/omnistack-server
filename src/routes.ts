import express from "express";
import ClassesController from "./controller/classesController";
import ConnectionsController from "./controller/connectionsController";


const routes = express.Router();
const classesController = new ClassesController();
const conectionsController = new ConnectionsController();

routes.post("/classes", classesController.create);

routes.get("/classes", classesController.index);

routes.post("/connections", conectionsController.create);

routes.get("/connections", conectionsController.index);



export default routes;
