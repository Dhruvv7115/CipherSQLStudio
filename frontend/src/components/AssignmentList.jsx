import React, { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard.jsx";
import { assignmentApi } from "../api.js";

const AssignmentList = () => {
	const [assignments, setAssignments] = useState([]);
	useEffect(() => {
		const fetchAssignments = async () => {
			const assignments = await assignmentApi.getAllAssignments();
			setAssignments(assignments);
		};
		fetchAssignments();
	}, []);
	return (
		<div className="assignment-card-container">
			{assignments.map((assignment) => (
				<AssignmentCard
					key={assignment.id}
					assignment={assignment}
				/>
			))}
		</div>
	);
};

export default AssignmentList;
