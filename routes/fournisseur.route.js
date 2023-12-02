import { Router } from "express";

import { getAllFournisseurs, getFournisseurByNumero, updateFournisseur, deleteFournisseur, createFournisseur } from "../controllers/fournisseur.controller.js";
const routerFournisseur = Router()

routerFournisseur.get("/", getAllFournisseurs)
routerFournisseur.get("/:id", getFournisseurByNumero)
routerFournisseur.post("/", createFournisseur)
routerFournisseur.put("/:id", updateFournisseur)
routerFournisseur.delete("/:id", deleteFournisseur)

export default routerFournisseur  