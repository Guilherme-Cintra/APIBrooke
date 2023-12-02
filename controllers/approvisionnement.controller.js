import Approvisionnement from "../model/approvisionnement.model.js";

export const getAllApprovisionnement = async (req, res, next)  => {
    try{
        const approvisionnement = await Approvisionnement.findAll()
        res.status(200).json(approvisionnement)
    } catch (error) {
        next(error);
      }
}






export const createApprovisionnement = async (req, res, next) => {
    try {
        const approvisionnement = await Approvisionnement.create(req.body);
        res.status(201).json(approvisionnement);
      } catch (error) {
        next(error);
      }
}

export const updateApprovisionnement = async (req ,res, next) => {
    try {
        const approvisionnement = await Approvisionnement.findByPk(req.params.numero)
        if (approvisionnement) {
            await approvisionnement.update(req.body);
            res.status(200).json(approvisionnement)
        } else {
            res.status(404).json({ message: 'Approvisionnement not found' });
          }
    }catch (error) {
        next(error);
      }
}

