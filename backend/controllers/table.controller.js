import pool from "../db/pg.js";

export const getTableData = async (req, res) => {
	const { tables } = req.body;
	if (!tables) return res.status(400).json({ message: "Tables are required" });

	try {
		const tableData = await Promise.all(
			tables.map(async (table) => {
				const schema = await pool.query(
					`SELECT column_name, data_type 
          FROM information_schema.columns 
          WHERE table_name = $1`,
					[table],
				);

				const rows = await pool.query(`SELECT * FROM ${table} LIMIT 5`);

				return {
					table,
					schema: schema.rows,
					rows: rows.rows,
				};
			}),
		);
		res.json(tableData);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
