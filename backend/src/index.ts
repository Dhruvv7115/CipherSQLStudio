import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
import assignmentRoutes from "./routes/assignment";
app.use("/api/assignments", assignmentRoutes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});

export default app;
