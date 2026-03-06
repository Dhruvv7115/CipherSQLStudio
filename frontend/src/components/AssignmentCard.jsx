import React from "react";
import "../styles/_assignments.scss";
const AssignmentCard = ({ assignment }) => {
	return (
		<div className="assignment-card">
			<h2 className="title">{assignment.title}</h2>
			<p>{assignment.description}</p>
			<p className={`${assignment.difficulty}`}>
				{assignment.difficulty}
			</p>
		</div>
	);
};

export default AssignmentCard;
