import express from "express";
import { updatePoints } from "../controllers/points.controllers.js";
const router = express.Router();

// Update points route
router.put("/updatePoints", updatePoints);

export default router;
