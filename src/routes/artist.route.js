import express from "express";
import apiArtistController from "../controllers/api/api.artist.controller.js";

const router = express.Router();

router.get("/get", apiArtistController.getAllArtists);
router.get("/get/:id", apiArtistController.get)

export default router;
