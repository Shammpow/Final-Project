import express from "express";
import races from "../controllers/racesController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", races.findAll);
router.post("/", races.create);

// Export routes for server.js to use.
export default router;
