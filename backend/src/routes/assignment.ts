import { Router } from "express";
import { getAssignmentById, getAssignments } from "../controllers/assignment";

const router = Router();

router.route("/").get(getAssignments);
router.route("/:id").get(getAssignmentById);

export default router;
