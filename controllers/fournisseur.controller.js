import Fournisseur from "../model/fournisseur.model.js";

export const getAllFournisseurs = async (req, res, next)  => {
    try{
        const fournisseurs = await Fournisseur.findAll()
        res.status(200).json(fournisseurs)
    } catch (error) {
        next(error);
      }
}

export const getFournisseurByNumero = async (req, res, next) => {
    try {
        const fournisseur = await Fournisseur.findByPk(req.params.id);
        if (fournisseur) {
            res.status(200).json(fournisseur)
        }else { 
            res.status(404).json({ message: 'fournisseur not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createFournisseur = async (req, res, next) => {
    try {
        const fournisseur = await Fournisseur.create(req.body);
        res.status(201).json(fournisseur);
      } catch (error) {
        next(error);
      }
}

export const updateFournisseur = async (req ,res, next) => {
    try {
        const fournisseur = await Fournisseur.findByPk(req.params.id)
        if (fournisseur) {
            await fournisseur.update(req.body);
            res.status(200).json(fournisseur)
        } else {
            res.status(404).json({ message: 'fournisseur not found' });
          }
    }catch (error) {
        next(error);
      }
}

export const deleteFournisseur = async (req, res, next) => {
    try{
        const fournisseur = await Fournisseur.findByPk(req.params.id)
        if(fournisseur) {
            await fournisseur.destroy();
            res.status(200).json({ message :"fournisseur deleted"})
        } else {
            res.status(404).json({ message :"fournisseur not found"})
        }
    }catch (error) {
        next(error);
      }
}

