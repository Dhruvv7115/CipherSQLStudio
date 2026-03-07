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

export const tableApi = {
	getTableData: async (tables) => {
		const res = await axios.get("/api/tables", {
			params: {
				tables,
			},
		});
		return res.data;
	},
};

export const executeApi = {
	executeSql: async (query) => {
		const res = await axios.post("/api/execute", { query });
		return res.data;
	},
};
