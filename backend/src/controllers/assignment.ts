import { Request, Response } from "express";
import { Assignment } from "../models/assignments";

export const getAssignments = async (req: Request, res: Response) => {
	try {
		const assignments = await Assignment.find();
		res.json(assignments);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
export const getAssignmentById = async (req: Request, res: Response) => {
	try {
		const assignment = await Assignment.findOne({ _id: req.params.id });
		res.json(assignment);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
