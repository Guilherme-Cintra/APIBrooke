import { Router } from "express";


import { createApprovisionnement, getAllApprovisionnement, updateApprovisionnement } from "../controllers/approvisionnement.controller.js";
const routerApprovisionnement = Router()

routerApprovisionnement.get("/", getAllApprovisionnement)

routerApprovisionnement.post("/", createApprovisionnement)
routerApprovisionnement.put("/:numero", updateApprovisionnement)


export default routerApprovisionnement 