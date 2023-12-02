import { Router } from "express";

import { getAllLivres, updateLivre, deleteLivre, createLivre, getLivreByIdProduit, getAllLivresGeo,getAllLivresLitterature,getAllLivresInfo } from "../controllers/livre.controller.js";
const routerLivre = Router()

routerLivre.get("/", getAllLivres)
routerLivre.get("/geo", getAllLivresGeo)
routerLivre.get("/info",getAllLivresInfo)
routerLivre.get("/litterature",getAllLivresLitterature)
routerLivre.get("/:idProduit", getLivreByIdProduit)
routerLivre.post("/", createLivre)  
routerLivre.put("/:idProduit", updateLivre) 
routerLivre.delete("/:idProduit", deleteLivre)
 
export default routerLivre