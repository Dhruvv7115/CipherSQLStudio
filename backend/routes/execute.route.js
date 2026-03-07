import { Router } from "express";
import { executePg } from "../controllers/execute.controller.js";

const router = Router();

router.post("/", executePg);

export default router;
