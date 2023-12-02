import  { LigneCommande } from "../model/ligneCommande.model.js";

export const getAllLigneCommandes = async (req, res, next)  => {
    try{
        const ligneCommande = await LigneCommande.findAll()
        res.status(200).json(ligneCommande)
    } catch (error) {
        next(error);
      }
}

export const getLigneCommande = async (req, res, next) => {
    try {
        const produit = await LigneCommande.findOne({
            where: {
                idProduit: req.params.idProduit,
                numeroCommande: req.params.numeroCommande
            }
        });
        if (ligneCommande) {
            res.status(200).json(ligneCommande)
        }else { 
            res.status(404).json({ message: 'ligneCommande not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createLigneCommande = async (req, res, next) => {
    try {
        const ligneCommande = await LigneCommande.create(req.body);
        res.status(201).json(ligneCommande);
      } catch (error) {
        next(error);
      }
}

export const updateLigneCommande = async (req ,res, next) => {
    try {
        const ligneCommande = await LigneCommande.findOne({
            where: {
                idProduit: req.params.idProduit,
                numeroCommande: req.params.numeroCommande
            }
        });
        if (ligneCommande) {
            await ligneCommande.update(req.body);
            res.status(200).json(ligneCommande)
        } else {
            res.status(404).json({ message: 'ligneCommande not found' });
          }
    }catch (error) {
        next(error); 
      }
}

export const deleteLigneCommande = async (req, res, next) => {
    try{
        const ligneCommande = await LigneCommande.findOne({
            where: {
                idProduit: req.params.idProduit,
                numeroCommande: req.params.numeroCommande
            }
        });
        if(ligneCommande) {
            await ligneCommande.destroy();
            res.status(200).json({ message :"ligneCommande deleted"})
        } else {
            res.status(404).json({ message :"ligneCommande not found"})
        }
    }catch (error) {
        next(error);
      }
}

 