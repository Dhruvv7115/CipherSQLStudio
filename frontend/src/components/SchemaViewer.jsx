import React, { useEffect, useState } from "react";
import { tableApi } from "../api";
import "../styles/_schema_viewer.scss";

const SchemaViewer = ({ assignment }) => {
	const [tableData, setTableData] = useState([]);
	const fetchTableData = async () => {
		const data = await tableApi.getTableData(assignment.tableNames);
		console.log(data, "data");
		setTableData(data);
	};
	useEffect(() => {
		fetchTableData();
	}, []);
	return (
		<section className="schema-viewer">
			<h1 className="schema-viewer__title">Example Table</h1>
			<div className="schema-viewer__tables">
				{tableData.length !== 0 &&
					tableData?.map((table) => (
						<div
							className="schema-viewer__table"
							key={table.table}
						>
							<h2 className="schema-viewer__table-name">{table.table}</h2>
							<div className="schema-viewer__table-wrapper">
								<table className="schema-viewer__table-grid">
									<thead>
										<tr>
											{Object.keys(table.rows[0]).map((key) => (
												<th key={key}>{key}</th>
											))}
										</tr>
									</thead>
									<tbody>
										{table.rows?.map((row, i) => (
											<tr key={i}>
												{Object.values(row).map((value, j) => (
													<td key={j}>{value}</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					))}
			</div>
			<h2 className="schema-viewer__title">Types</h2>
			<div className="schema-viewer__types">
				{tableData.length !== 0 &&
					tableData?.map((table) => (
						<div
							className="schema-viewer__table"
							key={table.table}
						>
							<div className="schema-viewer__table-wrapper">
								<table className="schema-viewer__table-grid">
									<thead>
										<tr>
											{Object.keys(table.schema[0]).map((key) => (
												<th key={key}>{key}</th>
											))}
										</tr>
									</thead>
									<tbody>
										{table.schema?.map((schema, i) => (
											<tr key={i}>
												{Object.values(schema).map((value, j) => (
													<td key={j}>{value}</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default SchemaViewer;
