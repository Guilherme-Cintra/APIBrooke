import { where } from "sequelize";
import Film from "../model/film.model.js";

export const getAllFilms = async (req, res, next)  => {
    try{
        const films = await Film.findAll()
        res.status(200).json(films)
    } catch (error) {
        next(error);
      }
}

export const getAllFilmsAction = async (req, res, next)  => {
    try{
        const films = await Film.findAll({
            where: {
                categories: "Action",
            }
        });
        res.status(200).json(films)
    } catch (error) {
        next(error);
      }
} 
export const getAllFilmsSciences = async (req, res, next)  => {
    try{
        const films = await Film.findAll({
            where: {
                categories: "Science Fiction",
            }
        });
        res.status(200).json(films)
    } catch (error) {
        next(error);
      }  
} 
export const getAllFilmsDrame = async (req, res, next)  => {
    try{
        const films = await Film.findAll({
            where: {
                categories: "Drame",
            }
        });   
        res.status(200).json(films)
    } catch (error) {
        next(error);
      }
} 

export const getFilmByIdProduit = async (req, res, next) => {
    try {
        const film = await Film.findByPk(req.params.idProduit);
        if (film) {
            res.status(200).json(film)
        }else { 
            res.status(404).json({ message: 'film not found' });
          }
    } catch (error) {
        next(error);
      }
    }

export const createFilm = async (req, res, next) => {
    try {
        const film = await Film.create(req.body);
        res.status(201).json(film);
      } catch (error) {
        next(error);
      }
}

export const updateFilm = async (req ,res, next) => {
    try {
        const film = await Film.findByPk(req.params.idProduit)
        if (film) {
            await film.update(req.body);
            res.status(200).json(film)
        } else {
            res.status(404).json({ message: 'film not found' });
          }
    }catch (error) {
        next(error);
      }
}

export const deleteFilm = async (req, res, next) => {
    try{
        const film = await Film.findByPk(req.params.idProduit)
        if(film) {
            await film.destroy();
            res.status(200).json({ message :"film deleted"})
        } else {
            res.status(404).json({ message :"film not found"})
        }
    }catch (error) {
        next(error);
      }
}

