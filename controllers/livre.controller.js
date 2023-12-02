import { where } from "sequelize";
import Livre from "../model/livre.model.js";

export const getAllLivres = async (req, res, next)  => {
    try{
        const livres = await Livre.findAll()
        res.status(200).json(livres)
    } catch (error) {
        next(error);
      }
}

export const getAllLivresLitterature = async (req, res, next)  => {
    try{
        const livres = await Livre.findAll({
            where: {
                categories: "Litterature",
            }
        });
        res.status(200).json(livres)
    } catch (error) {
        next(error);
      }
} 
export const getAllLivresInfo = async (req, res, next)  => {
    try{
        const livres = await Livre.findAll({
            where: {
                categories: "Informatique",
            }
        });
        res.status(200).json(livres)
    } catch (error) {
        next(error);
      }  
} 
export const getAllLivresGeo = async (req, res, next)  => {
    try{
        const livres = await Livre.findAll({
            where: {
                categories: "Géographie",
            }
        });   
        res.status(200).json(livres)
    } catch (error) {
        next(error);
      }
} 

export const getLivreByIdProduit = async (req, res, next) => {
    try {
        const livre = await Livre.findByPk(req.params.idProduit);
        if (livre) {
            res.status(200).json(livre)
        }else { 
            res.status(404).json({ message: 'livre not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createLivre = async (req, res, next) => {
    try {
        const livre = await Livre.create(req.body);
        res.status(201).json(livre);
      } catch (error) {
        next(error);
      }
}

export const updateLivre = async (req ,res, next) => {
    try {
        const livre = await Livre.findByPk(req.params.idProduit)
        if (livre) {
            await livre.update(req.body);
            res.status(200).json(livre)
        } else {
            res.status(404).json({ message: 'livre not found' });
          }
    }catch (error) {
        next(error);
      }
}

export const deleteLivre = async (req, res, next) => {
    try{
        const livre = await Livre.findByPk(req.params.idProduit)
        if(livre) {
            await livre.destroy();
            res.status(200).json({ message :"livre deleted"})
        } else {
            res.status(404).json({ message :"livre not found"})
        }
    }catch (error) {
        next(error);
      }
}

