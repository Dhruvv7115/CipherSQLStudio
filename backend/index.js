import express from "express";
import cors from "cors";
import { connectDB } from "./db/mainDb.js";
import assignmentRoutes from "./routes/assignment.route.js";
import executePgRoute from "./routes/execute.route.js";
import tableRoutes from "./routes/table.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/assignments", assignmentRoutes);
app.use("/api/execute", executePgRoute);
app.use("/api/tables", tableRoutes);

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
