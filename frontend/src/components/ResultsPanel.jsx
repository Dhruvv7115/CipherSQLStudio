import React from "react";

const ResultsPanel = ({ results, error, loading }) => {
	return (
		<div className="results-panel">
			{error && (
				<div className="results-panel__error">
					<p>⚠ {error}</p>
				</div>
			)}
			{results && results.length !== 0 && (
				<div className="results-panel__table-wrapper">
					<table className="results-panel__table">
						<thead>
							<tr>
								{Object.keys(results[0]).map((key) => (
									<th key={key}>{key}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{results.map((row, i) => (
								<tr key={i}>
									{Object.values(row).map((val, j) => (
										<td key={j}>{val}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
			{results && results.length === 0 && (
				<div className="results-panel__empty">
					Query executed successfully, but no results to display
				</div>
			)}
			{!results && !error && !loading && (
				<div className="results-panel__empty">
					Run a query to see results here
				</div>
			)}
		</div>
	);
};

export default ResultsPanel;
