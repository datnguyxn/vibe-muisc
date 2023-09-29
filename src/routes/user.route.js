import express from "express";
import ApiUserController from "../controllers/api/api.user.controller.js";

const router = express.Router();

// router.get("/get_all", UserController.getAllUsers);
router.get("/get_by_id/:id", ApiUserController.get.bind(ApiUserController));
router.get("/get_by_token/:token", ApiUserController.getByToken.bind(ApiUserController));

export default router;