import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./components/AssignmentList";
import ListingPage from "./pages/listing-page";
import AttemptPage from "./pages/attempt-page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<ListingPage />}
				/>
				<Route
					path="/assignments/:id"
					element={<AttemptPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
