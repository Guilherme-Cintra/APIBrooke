import { where } from "sequelize";
import JeuVid from "../model/jeux.model.js"; 

export const getAllJeux = async (req, res, next)  => {
    try{
        const jeux = await JeuVid.findAll()
        res.status(200).json(jeux)
    } catch (error) {
        next(error);
    }
}
export const getAllJeuxWI = async (req, res, next)  => {
    try{
        const jeux = await JeuVid.findAll({
            where: {
                collection: "Nintendo Wii U",
            }
        });
        res.status(200).json(jeux)
    } catch (error) {
        next(error);
    }
} 
export const getAllJeuxPS = async (req, res, next)  => {
    try{
        const jeux = await JeuVid.findAll({
            where: {
                collection: "Playstation",
            }
        });
        res.status(200).json(jeux)
    } catch (error) {
        next(error);
    }  
} 
export const getAllJeuxXbox = async (req, res, next)  => {
    try{
        const jeux = await JeuVid.findAll({
            where: {
                collection: "Xbox",
            }
        });   
        res.status(200).json(jeux)
    } catch (error) {
        next(error);
    }
} 
export const getJeuxByIdProduit = async (req, res, next) => {
    try {
        const jeux = await JeuVid.findByPk(req.params.idProduit);
        if (jeux) {
            res.status(200).json(jeux)
        }else { 
            res.status(404).json({ message: 'jeux not found' });
          }
    } catch (error) {
        next(error);
      }
    }
export const createJeux = async (req, res, next) => {
    try {
        const jeux = await JeuVid.create(req.body);
        res.status(201).json(jeux);
      } catch (error) {
        next(error);
    }
}
export const updateJeux = async (req ,res, next) => {
    try {
        const jeux = await JeuVid.findByPk(req.params.idProduit)
        if (jeux) {
            await jeux.update(req.body);
            res.status(200).json(jeux)
        } else {
            res.status(404).json({ message: 'jeux not found' });
          }
    }catch (error) {
        next(error);
    }
}

export const deleteJeux = async (req, res, next) => {
    try{
        const jeux = await JeuVid.findByPk(req.params.idProduit)
        if(jeux) {
            await jeux.destroy();
            res.status(200).json({ message :"jeux deleted"})
        } else {
            res.status(404).json({ message :"jeux not found"})
        }
    }catch (error) {
        next(error);
    }
}
