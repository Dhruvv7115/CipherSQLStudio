import mongoose, { Schema } from "mongoose";

const assignmentsSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		difficulty: {
			type: String,
			required: true,
			enum: ["easy", "medium", "hard"],
		},
		question: {
			type: String,
			required: true,
		},
		requirements: [
			{
				type: String,
				required: true,
			},
		],
		tableNames: [
			{
				type: String,
				required: true,
			},
		],
	},
	{
		timestamps: true,
	},
);

export const Assignment = mongoose.model("assignments", assignmentsSchema);
