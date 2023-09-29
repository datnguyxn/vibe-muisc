import express from "express";
import ApiPlaylistController from "../controllers/api/api.playlist.controller.js";

const router = express.Router();

router.get("/get", ApiPlaylistController.get);

export default router;