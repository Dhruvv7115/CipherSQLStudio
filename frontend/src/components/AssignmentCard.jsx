import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/_assignments.scss";

const AssignmentCard = ({ assignment }) => {
	const navigate = useNavigate();

	return (
		<div
			className="assignment-card"
			onClick={() => navigate(`/assignments/${assignment._id}`)}
		>
			<div className="assignment-card__top">
				<h2 className="assignment-card__title">{assignment.title}</h2>
				<span
					className={`assignment-card__difficulty ${assignment.difficulty.toLowerCase()}`}
				>
					{assignment.difficulty}
				</span>
			</div>
			<p className="assignment-card__description">{assignment.description}</p>
		</div>
	);
};

export default AssignmentCard;
