import express from "express";
import {User} from "../controllers/user.control.js";

const router = express.Router()

router.get('/', User)

export default router;



