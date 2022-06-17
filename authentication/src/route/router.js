import controller from "../controller/controller.js";
import express from "express";
import db from '../db.config/db.config.js'
const router = express.Router();
router.post("/register",await db, controller.create);
router.get("/login",await db, controller.login);
router.get("/logout",await db,controller.logout)
export default router;
