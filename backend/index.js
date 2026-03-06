import express from "express";
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

import assignmentRoutes from "./assignment.route.js";
import { connectDB } from "./db.js";
app.use("/api/assignments", assignmentRoutes);

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
