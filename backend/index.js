import express from "express";
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

import assignmentRoutes from "./assignment.route.js";
app.use("/api/assignments", assignmentRoutes);

app.listen(3000, () => {
	console.log("Example app listening on port 3000");
});

export default app;
