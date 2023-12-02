import { Router } from "express";

import {  createGestionnaire, connectionGestionnaire, getAlleGestionnaires } from "../controllers/gestionnaire.controller.js";
const routerGestionnaire = Router()


routerGestionnaire.post("/", createGestionnaire) //Création
routerGestionnaire.get("/:courriel/:password", connectionGestionnaire) //Connection


routerGestionnaire.get("/", getAlleGestionnaires) //Pour tester



export default routerGestionnaire