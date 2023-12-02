import { Router } from "express";

import { getAllLivraisons, getLivraisonById, updateLivraison, deleteLivraison, createLivraison } from "../controllers/livraison.controller.js";
const routerLivraison = Router()

routerLivraison.get("/", getAllLivraisons)
routerLivraison.get("/:id", getLivraisonById)
routerLivraison.post("/", createLivraison)
routerLivraison.put("/:id", updateLivraison)
routerLivraison.delete("/:id", deleteLivraison)

export default routerLivraison