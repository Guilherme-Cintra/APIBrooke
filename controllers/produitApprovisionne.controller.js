import ProduitApprovisionne from "../model/produitApprovisionne.model.js";

export const getAllProduitApprovisionnes = async (req, res, next)  => {
    try{
        const produitApprovisionnes = await ProduitApprovisionne.findAll()
        res.status(200).json(produitApprovisionnes)
    } catch (error) {
        next(error);
      }
}

export const getProduitApprovisionneByPK = async (req, res, next) => {
    try {
        const produitApprovisionne = await ProduitApprovisionne.findOne({
            where: {
                idProduit: req.params.idProduit,
                numeroApprovisionnement: req.params.numeroApprovisionnement
            }
        });
        if (produitApprovisionne) {
            res.status(200).json(produitApprovisionne)
        }else { 
            res.status(404).json({ message: 'produitApprovisionne not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createProduitApprovisionne = async (req, res, next) => {
    try {
        const produitApprovisionne = await ProduitApprovisionne.create(req.body);
        res.status(201).json(produitApprovisionne);
      } catch (error) {
        next(error);
      }
}

export const updateProduitApprovisionne = async (req ,res, next) => {
    try {
        const produitApprovisionne = await ProduitApprovisionne.findOne({
            where: {
                idProduit: req.params.idProduit,
                numeroApprovisionnement: req.params.numeroApprovisionnement
            }
        });
        if (produitApprovisionne) {
            await produitApprovisionne.update(req.body);
            res.status(200).json(produitApprovisionne)
        } else {
            res.status(404).json({ message: 'produitApprovisionne not found' });
          }
    }catch (error) {
        next(error); 
      }
}

export const deleteProduitApprovisionne = async (req, res, next) => {
    try{
        const produitApprovisionne = await ProduitApprovisionne.findOne({
            where: {
                idProduit: req.params.idProduit,
                numeroApprovisionnement: req.params.numeroApprovisionnement
            }
        });
        if(produitApprovisionne) {
            await produitApprovisionne.destroy();
            res.status(200).json({ message :"produitApprovisionne deleted"})
        } else {
            res.status(404).json({ message :"produitApprovisionne not found"})
        }
    }catch (error) {
        next(error);
      }
}

