import React from "react";
import AssignmentList from "../components/AssignmentList";
import "../styles/_assignments.scss";

const ListingPage = () => {
	return (
		<main className="listing-page">
			<div className="listing-page__header">
				<h1 className="listing-page__title">SQL Assignments</h1>
				<p className="listing-page__subtitle">
					Pick an assignment and start practicing
				</p>
			</div>
			<AssignmentList />
		</main>
	);
};

export default ListingPage;
