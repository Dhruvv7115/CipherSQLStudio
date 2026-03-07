import { Pool } from "pg";
import { configDotenv } from "dotenv";
configDotenv();
export const pool = new Pool({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: process.env.PG_PASSWORD || "",
	database: "ciphersql_sandbox",
});

pool.connect((err) => {
	if (err) {
		console.error("Error connecting to the database:", err);
		throw err;
	} else {
		console.log("Connected to the pg database");
	}
});

export default pool;
