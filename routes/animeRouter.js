


import express from "express";
const animeRoutes = express.Router();
import animeController from "../controllers/animeController.js";
import Auth from "../middleware/Auth.js"

animeRoutes.get("/animes", Auth.Authorization,animeController.getAllanimes);
animeRoutes.post("/animes", Auth.Authorization,animeController.createAnime);
animeRoutes.delete("/animes", Auth.Authorization,animeController.deleteAnime);
animeRoutes.get("/animes", Auth.Authorization,animeController.getOneAnime);

export default animeRoutes;