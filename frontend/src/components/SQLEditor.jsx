import Editor from "@monaco-editor/react";
import React from "react";
import "../styles/_sql_editor.scss";

const SQLEditor = ({ query, setQuery }) => {
	return (
		<div className="sql-editor">
			<div className="sql-editor__header">
				<span className="sql-editor__title">SQL Editor</span>
			</div>
			<div className="sql-editor__monaco">
				<Editor
					height="100%"
					defaultLanguage="sql"
					language="sql"
					value={query}
					onChange={(val) => setQuery(val)}
					theme="vs-dark"
					width="100%"
					options={{
						fontSize: 20,
						minimap: { enabled: false },
						scrollBeyondLastLine: false,
						padding: { top: 16 },
					}}
				/>
			</div>
		</div>
	);
};

export default SQLEditor;
