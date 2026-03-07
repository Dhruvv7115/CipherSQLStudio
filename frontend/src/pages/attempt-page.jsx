import React, { useEffect, useState } from "react";
import QuestionPanel from "../components/QuestionPanel";
import { assignmentApi } from "../api";
import { useParams } from "react-router-dom";

const AttemptPage = () => {
	const { id } = useParams();
	const [assignment, setAssignment] = useState(null);
	const fetchAssignment = async () => {
		const assignment = await assignmentApi.getAssignment(id);
		if (assignment) {
			console.log(assignment);
			setAssignment(assignment);
		}
	};

	useEffect(() => {
		fetchAssignment();
	}, []);

	if (!assignment) {
		return (
			<div
				style={{
					display: "flex",
					width: "100vw",
					height: "100vh",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				No assignment found
			</div>
		);
	}
	return (
		<div>
			<QuestionPanel assignment={assignment} /> 
		</div>
	);
};

export default AttemptPage;
