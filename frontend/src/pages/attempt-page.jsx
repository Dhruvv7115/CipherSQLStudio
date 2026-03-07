import React, { useEffect, useState } from "react";
import QuestionPanel from "../components/QuestionPanel";
import { assignmentApi, executeApi, getHint } from "../api";
import { useParams } from "react-router-dom";
import SQLEditor from "../components/SQLEditor";
import "../styles/_attempt_page.scss";
import SchemaViewer from "../components/SchemaViewer";
import { Lightbulb as Bulb } from "lucide-react";
import ResultsPanel from "../components/ResultsPanel";

const AttemptPage = () => {
	const { id } = useParams();
	const [assignment, setAssignment] = useState(null);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState(null);
	const [error, setError] = useState(null);
	const [hint, setHint] = useState(null);
	const [hintLoading, setHintLoading] = useState(false);
	const [showHint, setShowHint] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchAssignment = async () => {
		const assignment = await assignmentApi.getAssignment(id);
		if (assignment) setAssignment(assignment);
	};

	useEffect(() => {
		fetchAssignment();
	}, []);

	const handleExecute = async () => {
		setLoading(true);
		setError(null);
		setResults(null);
		try {
			const result = await executeApi.executeSql(query);
			setResults(result);
		} catch (err) {
			console.log(err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const getAiHint = async () => {
		setShowHint(true);
		setHintLoading(true);
		setHint(null);
		const res = await getHint(assignment?.question, query, error);

		setHint(res.hint);
		setHintLoading(false);
	};

	if (!assignment) {
		return <div className="attempt-loading">No assignment found</div>;
	}

	return (
		<div className="attempt-layout">
			<div className="attempt-layout__left">
				<QuestionPanel assignment={assignment} />
				<SchemaViewer assignment={assignment} />
			</div>

			<div className="attempt-layout__right">
				<SQLEditor
					query={query}
					setQuery={setQuery}
				/>
				<div className="attempt-layout__actions">
					<button
						className="attempt-layout__execute-btn"
						onClick={handleExecute}
						disabled={loading}
					>
						{loading ? "Running..." : "▶ Execute Query"}
					</button>
					<button
						className="attempt-layout__hint-btn"
						onClick={() => getAiHint()}
					>
						<Bulb />
						Get Hint
					</button>
				</div>

				<ResultsPanel
					results={results}
					error={error}
					loading={loading}
				/>
			</div>
			{showHint && (
				<div
					className="hint-modal"
					onClick={() => setShowHint(false)}
				>
					<div
						className="hint-modal__box"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="hint-modal__header">
							<h2 className="hint-modal__title">💡 Hint</h2>
							<button
								className="hint-modal__close"
								onClick={() => setShowHint(false)}
							>
								✕
							</button>
						</div>
						<div className="hint-modal__body">
							{hintLoading ? (
								<div className="hint-modal__loading">
									<div className="hint-modal__spinner" />
									<p>Thinking...</p>
								</div>
							) : (
								<p className="hint-modal__text">{hint}</p>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AttemptPage;
