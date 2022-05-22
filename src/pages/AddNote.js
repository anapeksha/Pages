import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { addNote } from "../redux/reducers/noteReducer";

const AddNote = () => {
	const [input, setInput] = useState({
		id: "",
		title: "",
		content: "",
		date: Date,
	});

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addNote(input));
	};

	return (
		<div>
			<Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
		</div>
	);
};

export default AddNote;
