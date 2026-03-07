import { Assignment } from "../assignment.model.js";

const getAllAssignments = async (req, res) => {
	try {
		const assignments = await Assignment.find();
		res.json(assignments);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
const getAssignment = async (req, res) => {
	const { id } = req.params;
	if (!id)
		return res.status(400).json({ message: "Assignment ID is required" });
	try {
		const assignment = await Assignment.findById(id);
		res.json(assignment);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

export { getAllAssignments, getAssignment };
