import express from "express";
import races from "../controllers/racesController";

const router = express.Router();

router.get("/", races.findAll);
router.post("/", races.create);

// Export routes for server.js to use.
export default router;
