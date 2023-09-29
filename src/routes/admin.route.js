import express from "express";
import AdminController from "../controllers/admin.controller.js";

const router = express.Router();

router.get('/dashboard', AdminController.show)

export default router;