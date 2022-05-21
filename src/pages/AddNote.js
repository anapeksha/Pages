import React, { useState } from "react";
import Form from "../components/Form";
import setData from "../controllers/setData";

const AddNote = () => {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	const [page, setPages] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(input.title, input.content);
		setPages([...page, input]);
		console.log(page);
		setData(page);
	};

	return (
		<div>
			<Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
		</div>
	);
};

export default AddNote;
