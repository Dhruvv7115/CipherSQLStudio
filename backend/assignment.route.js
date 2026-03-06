import { Router } from "express";
import { getAllAssignments, getAssignment } from "./assignment.controller.js";

const router = Router();

router.get("/", getAllAssignments);
router.get("/:id", getAssignment);

export default router;
