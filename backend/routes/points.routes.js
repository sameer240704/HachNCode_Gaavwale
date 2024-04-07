import express from "express";
import { getPoints, updatePoints } from "../controllers/points.controllers.js";
const router = express.Router();

// Update points route
router.put("/updatePoints", updatePoints);
router.get("/getPoints", getPoints);

export default router;
