import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import setData from "../controllers/setData";

const AddNote = () => {
	const [input, setInput] = useState({
		id: "",
		title: "",
		content: "",
		date: Date,
	});

	const [pages, setPages] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setPages([...pages, input]);
	};

	useEffect(() => {
		setData(pages);
	}, [pages]);

	return (
		<div>
			<Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
		</div>
	);
};

export default AddNote;
