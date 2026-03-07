import { Router } from "express";
import { getTableData } from "../controllers/table.controller.js";

const router = Router();

router.get("/", getTableData);

export default router;
