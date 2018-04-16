import express from "express";
import races from "../controllers/racesController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", races.findAll);
router.get("/:id", races.findById);
router.post("/", races.create);
router.put("/:id", races.update);
router.delete("/:id", races.remove);

// Export routes for server.js to use.
export default router;
