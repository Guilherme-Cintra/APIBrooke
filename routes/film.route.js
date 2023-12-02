import { Router } from "express";

import { getAllFilms, updateFilm, deleteFilm, createFilm, getFilmByIdProduit, getAllFilmsAction, getAllFilmsSciences, getAllFilmsDrame } from "../controllers/film.controller.js";
const routerFilm = Router()

routerFilm.get("/", getAllFilms)
routerFilm.get("/action", getAllFilmsAction)
routerFilm.get("/drame", getAllFilmsDrame)
routerFilm.get("/sciences", getAllFilmsSciences)
routerFilm.get("/:idProduit", getFilmByIdProduit)
routerFilm.post("/", createFilm)  
routerFilm.put("/:idProduit", updateFilm) 
routerFilm.delete("/:idProduit", deleteFilm)

export default routerFilm