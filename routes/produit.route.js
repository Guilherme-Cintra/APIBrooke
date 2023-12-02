import { Router } from "express";

import { getAllProduits, getProduitById, updateProduit, deleteProduit, createProduit } from "../controllers/produit.controller.js";
const routerProduit = Router()

routerProduit.get("/", getAllProduits)
routerProduit.get("/:id", getProduitById)
routerProduit.post("/", createProduit)
routerProduit.put("/:id", updateProduit)
routerProduit.delete("/:id", deleteProduit)

export default routerProduit 