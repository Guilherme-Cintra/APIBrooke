import Produit from "../model/produit.model.js";

export const getAllProduits = async (req, res, next)  => {
    try{
        const produits = await Produit.findAll()
        res.status(200).json(produits)
    } catch (error) {
        next(error);
      }
}

export const getProduitById = async (req, res, next) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        if (produit) {
            res.status(200).json(produit)
        }else { 
            res.status(404).json({ message: 'produit not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createProduit = async (req, res, next) => {
    try {
        const produit = await Produit.create(req.body);
        res.status(201).json(produit);
      } catch (error) {
        next(error);
      }
}

export const updateProduit = async (req ,res, next) => {
    try {
        const produit = await Produit.findByPk(req.params.id)
        if (produit) {
            await produit.update(req.body);
            res.status(200).json(produit)
        } else {
            res.status(404).json({ message: 'produit not found' });
          }
    }catch (error) {
        next(error); 
      }
}

export const deleteProduit = async (req, res, next) => {
    try{
        const produit = await Produit.findByPk(req.params.id)
        if(produit) {
            await produit.destroy();
            res.status(200).json({ message :"produit deleted"})
        } else {
            res.status(404).json({ message :"produit not found"})
        }
    }catch (error) {
        next(error);
      }
}

