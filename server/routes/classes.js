import express from "express";
import classes from "../controllers/classesController";

const router = express.Router();

router.get("/", classes.findOne);

export default router;
