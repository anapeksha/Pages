import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AddNote, ViewNotes } from "./pages";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/Pages" element={<Home />} />
				<Route path="/Pages/add-note" element={<AddNote />} />
				<Route path="/Pages/view-note" element={<ViewNotes />} />
			</Routes>
		</div>
	);
};

export default App;
