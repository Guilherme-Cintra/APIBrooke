import Commande from "../model/commande.model.js";

export const getAllCommandes = async (req, res, next)  => {
    try{
        const commandes = await Commande.findAll()
        res.status(200).json(commandes)
    } catch (error) {
        next(error);
      }
}

export const getCommandeById = async (req, res, next) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (commande) {
            res.status(200).json(commande)
        }else { 
            res.status(404).json({ message: 'commande not found' });
          }
    } catch (error) {
        next(error);
      }
}

export const createCommande = async (req, res, next) => {
    try {
        const commande = await Commande.create(req.body);
        res.status(201).json(commande);
      } catch (error) {
        next(error);
      }
}

export const updateCommande = async (req ,res, next) => {
    try {
        const commande = await Commande.findByPk(req.params.id)
        if (commande) {
            await commande.update(req.body);
            res.status(200).json(commande)
        } else {
            res.status(404).json({ message: 'commande not found' });
          }
    }catch (error) {
        next(error);
      }
}

export const deleteCommande = async (req, res, next) => {
    try{

        const commande = await Commande.findByPk(req.params.id)

        if(commande) {
            await commande.destroy();
            res.status(200).json({ message :"Commande deleted"})
        } else {
            res.status(404).json({ message :"Commande not found"})
        }
    }catch (error) {
        next(error);
      }
}