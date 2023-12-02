import { Router } from "express";

import { getAllProduitApprovisionnes, getProduitApprovisionneByPK, updateProduitApprovisionne, deleteProduitApprovisionne, createProduitApprovisionne } from "../controllers/produitApprovisionne.controller.js";
const routerProduitApprovisionne = Router()

routerProduitApprovisionne.get("/", getAllProduitApprovisionnes)
routerProduitApprovisionne.get("/:idProduit/:numeroApprovisionnement", getProduitApprovisionneByPK)
routerProduitApprovisionne.post("/", createProduitApprovisionne)
routerProduitApprovisionne.put("/:idProduit/:numeroApprovisionnement", updateProduitApprovisionne)
routerProduitApprovisionne.delete("/:idProduit/:numeroApprovisionnement", deleteProduitApprovisionne)

export default routerProduitApprovisionne