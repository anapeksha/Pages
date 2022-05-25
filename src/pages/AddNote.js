import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addNote(input));
		setTimeout(() => {
			navigate("/Pages/view-note");
		}, 800);
	};

	return (
		<div>
			<Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
		</div>
	);
};

export default AddNote;
