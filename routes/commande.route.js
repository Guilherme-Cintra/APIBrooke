import { Router } from "express";

import { getAllCommandes, getCommandeById, updateCommande, deleteCommande, createCommande } from "../controllers/commande.controller.js";
const routerCommande = Router()

routerCommande.get("/", getAllCommandes)
routerCommande.get("/:id", getCommandeById)
routerCommande.post("/", createCommande)
routerCommande.put("/:id", updateCommande)
routerCommande.delete("/:id", deleteCommande)

export default routerCommande