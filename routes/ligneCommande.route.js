import { Router } from "express";

import { getAllLigneCommandes, getLigneCommande, updateLigneCommande, deleteLigneCommande, createLigneCommande } from "../controllers/ligneCommande.controller.js";
const routerLigneCommande = Router()

routerLigneCommande.get("/", getAllLigneCommandes)
routerLigneCommande.get("/:idProduit/:numeroCommande", getLigneCommande)
routerLigneCommande.post("/", createLigneCommande)
routerLigneCommande.put("/:idProduit/:numeroCommande", updateLigneCommande)
routerLigneCommande.delete("/:idProduit/:numeroCommande", deleteLigneCommande)

export default routerLigneCommande