import Gestionnaire from "../model/gestionnaire.model.js";

export const connectionGestionnaire = async (req, res, next) => {
    try {
        const gestionnaire  = await Gestionnaire.findOne({ 
            where: {
                courriel : req.params.courriel,
                password: req.params.password
            }
        })
        if(gestionnaire) {
            res.status(200).json(gestionnaire)
        }else { 
            res.status(404).json({ message: 'gestionnaire not found' });
          }
    } catch (error) {
        next(error);
    }
}

export const createGestionnaire = async (req, res, next) => {
    try {
        const gestionnaire = await Gestionnaire.create(req.body);
        res.status(201).json(gestionnaire);
      } catch (error) {
        next(error);
      }
}

// Pour tester 

export const getAlleGestionnaires = async (req, res, next)  => {
    try{
        const gestionnaires = await Gestionnaire.findAll()
        res.status(200).json(gestionnaires)
    } catch (error) {
        next(error);
      }
}