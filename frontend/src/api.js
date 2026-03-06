import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const assignmentApi = {
	getAllAssignments: async () => {
		const res = await axios.get("/api/assignments");
		return res.data;
	},
	getAssignment: async (id) => {
		const res = await axios.get("/api/assignments/" + id);
		return res.data;
	},
};
