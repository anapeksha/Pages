import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import Home from "./pages/Home";
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className="App">
            <Navbar/>
			<Routes>
				<Route path="/Pages" element={<Home />} />
				<Route path="/Pages/add-note" element={<AddNote />} />
			</Routes>
		</div>
	);
};

export default App;
