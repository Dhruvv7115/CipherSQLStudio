import mongoose, { Schema } from "mongoose";

const assignmentSchema = new Schema(
	{
		title: String,
		difficulty: String,
		description: String,
		question: String,
		requirements: [String],
		tableNames: [String],
	},
	{ timestamps: true },
);

export const Assignment = mongoose.model("Assignment", assignmentSchema);
