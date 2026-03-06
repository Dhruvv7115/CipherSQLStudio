import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./components/AssignmentList";
import ListingPage from "./pages/listing-page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<ListingPage />}
				/>
				{/* <Route
					path="/assignments/:id"
					element={<AssignmentDetail />}
				/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
