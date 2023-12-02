import Livraison from "../model/livraison.model.js";

export const getAllLivraisons = async (req, res, next)  => {
    try{
        const livraisons = await Livraison.findAll()
        res.status(200).json(livraisons)
    } catch (error) {
        next(error);
      }
}

export const getLivraisonById = async (req, res, next) => {
    try {
        const livraison = await Livraison.findByPk(req.params.id);
        if (livraison) {
            res.status(200).json(livraison)
        }else { 
            res.status(404).json({ message: 'livraison not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createLivraison = async (req, res, next) => {
    try {
        const livraison = await Livraison.create(req.body);
        res.status(201).json(livraison);
      } catch (error) {
        next(error);
      }
}

export const updateLivraison = async (req ,res, next) => {
    try {
        const livraison = await Livraison.findByPk(req.params.id)
        if (livraison) {
            await livraison.update(req.body);
            res.status(200).json(livraison)
        } else {
            res.status(404).json({ message: 'livraison not found' });
          }
    }catch (error) {
        next(error);
      }
}

export const deleteLivraison = async (req, res, next) => {
    try{
        const livraison = await Livraison.findByPk(req.params.id)
        if(livraison) {
            await livraison.destroy();
            res.status(200).json({ message :"livraison deleted"})
        } else {
            res.status(404).json({ message :"livraison not found"})
        }
    }catch (error) {
        next(error);
      }
}

