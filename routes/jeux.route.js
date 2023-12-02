import { Router } from "express";

import { getAllJeux, updateJeux, deleteJeux, createJeux, getJeuxByIdProduit, getAllJeuxWI, getAllJeuxPS, getAllJeuxXbox } from "../controllers/jeux.controller.js";
const routerJeux = Router()

routerJeux.get("/", getAllJeux)
routerJeux.get("/wi", getAllJeuxWI)
routerJeux.get("/ps", getAllJeuxPS)
routerJeux.get("/xbox", getAllJeuxXbox)
routerJeux.get("/:idProduit", getJeuxByIdProduit)
routerJeux.post("/", createJeux)  
routerJeux.put("/:idProduit", updateJeux) 
routerJeux.delete("/:idProduit", deleteJeux)

export default routerJeux