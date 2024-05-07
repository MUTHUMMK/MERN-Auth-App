import express from "express";
import { User } from "../controllers/user.control.js";

export const router = express.Router()

router.get('/', User)

export default router;



