import React, {useState} from "react";
import Form from "../components/Form";

const AddNote = () => {
	const [input, setInput] = useState({
		title: "",
		content: ""
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		

	};

	const handleChange = (name) => (event) => {
		setInput({...input, [name]: event })
	}

	const

	return (
		<div>
			<Form handleSubmit={handleSubmit}/>
		</div>
	);
};

export default AddNote;
