import pool from "../db/pg.js";

const executePg = async(req, res) => {
	const { query } = req.body;
	console.log(query);

	if (!query) return res.status(400).json({ message: "Query is required" });

	const blocked = ["DROP", "DELETE", "INSERT", "UPDATE", "ALTER", "TRUNCATE"];

	if (blocked.some((word) => query.toUpperCase().includes(word))) {
		return res.status(400).json({ message: "Query is blocked" });
	}

	try {
		const result = await pool.query(query);
		console.log(result);
		res.json(result.rows);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

export { executePg };
