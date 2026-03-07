import express from "express";
import cors from "cors";
import { connectDB } from "./db/mainDb.js";
import assignmentRoutes from "./routes/assignment.route.js";
import executePgRoute from "./routes/execute.route.js";
import tableRoutes from "./routes/table.route.js";
import getHint from "./gemini.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/assignments", assignmentRoutes);
app.use("/api/execute", executePgRoute);
app.use("/api/tables", tableRoutes);

app.post("/api/hint", async (req, res) => {
	const { question, userQuery, error } = req.body;
	console.log(question, userQuery, error);
	if (!question)
		return res.status(400).json({ message: "Question is required" });
	await getHint(question, userQuery, error)
		.then((hint) => {
			console.log(hint);
			res.status(200).json({ hint });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: err.message });
		});
});

connectDB()
	.then(() =>
		app.listen(3000, () => {
			console.log("Example app listening on port 3000");
		}),
	)
	.catch((err) => {
		console.log(err);
	});

export default app;
