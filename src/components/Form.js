import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "animate.css";
import { nanoid } from "nanoid";
import React from "react";
import "../styles/form.css";

const CustomTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "#a9ccff",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#a9ccff",
		},
		"&:hover fieldset": {
			borderColor: "#a9ccff",
		},
		"& .MuiInput-underline:after": {
			borderColor: "#a9ccff",
		},
	},
});

const CustomButton = styled(Button)({
	padding: "6px 12px",
	border: "1px solid",
	lineHeight: 1.5,
	backgroundColor: "#a9ccff",
	borderColor: "#a9ccff",
	"&:hover": {
		backgroundColor: "#95b9e7",
		borderColor: "#95b9e7",
		boxShadow: "none",
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: "#8aabd6",
		borderColor: "#8aabd6",
	},
	"&:focus": {
		boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
	},
});

const Form = (props) => {
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		var currentDate = new Date();
		currentDate.toLocaleDateString();
		var newID = nanoid();
		props.setInput({
			...props.input,
			id: newID,
			date: currentDate,
			[name]: value,
		});
	};

	return (
		<Box className="form-body">
			<Box className="form animate__animated animate__zoomIn animate__fast">
				<Typography
					variant="h5"
					style={{ textAlign: "center", color: "#a9ccff" }}
				>
					Add Page
				</Typography>
				<FormGroup>
					<form onSubmit={props.handleSubmit}>
						<CustomTextField
							size="medium"
							label="Title"
							name="title"
							value={props.input.title}
							style={{
								marginTop: "0.75em",
								marginRight: "0.5em",
								marginLeft: "0.5em",
							}}
							sx={{
								input: {
									color: "#a9ccff",
								},
								label: {
									color: "#a9ccff",
								},
							}}
							onChange={handleChange}
						/>
						<CustomTextField
							label="Note"
							size="medium"
							name="content"
							value={props.input.content}
							multiline
							minRows={5}
							maxRows={15}
							style={{
								marginTop: "0.75em",
								marginRight: "0.5em",
								marginLeft: "0.5em",
							}}
							sx={{
								textarea: {
									color: "#a9ccff",
								},
								label: {
									color: "#a9ccff",
								},
							}}
							onChange={handleChange}
						/>
						<CustomButton
							type="submit"
							style={{
								marginTop: "0.75em",
								marginRight: "0.5em",
								marginLeft: "0.5em",
							}}
							sx={{
								color: "#212122",
								fontWeight: "700",
							}}
						>
							Add
						</CustomButton>
					</form>
				</FormGroup>
			</Box>
		</Box>
	);
};

export default Form;
