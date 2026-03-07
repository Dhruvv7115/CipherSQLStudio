import Editor from "@monaco-editor/react";

import React from "react";

const SQLEditor = () => {
	return (
		<div>
			<Editor
				height="100vh"
				language="sql"
				defaultValue="// some comment"
				theme="vs-dark"
				width="50vw"
			/>
		</div>
	);
};

export default SQLEditor;
