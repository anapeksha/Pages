import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "animate.css";
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
		boxShadow: "0 0 0 0.2rem rgb(138 171 214)",
	},
});

const Form = (props) => {
	return (
		<div>
			<Box className="form-body">
				<Box className="form animate__animated animate__fadeIn animate__slow">
					<Typography
						variant="h5"
						style={{ textAlign: "center", color: "#a9ccff" }}
					>
						Add Note
					</Typography>
					<FormGroup>
						<form onSubmit={props.handleSubmit}>
							<CustomTextField
								size="medium"
								label="Title"
								style={{
									marginTop: "0.5em",
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
								onChange={props.handleChange}
							/>
							<CustomTextField
								label="Note"
								size="medium"
								multiline
								rows={15}
								style={{
									marginTop: "0.5em",
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
								onChange={props.handleChange}
							/>
							<CustomButton
								type="submit"
								style={{
									marginTop: "0.5em",
									marginRight: "0.5em",
									marginLeft: "0.5em",
								}}
								sx={{
									color: "black",
								}}
							>
								Add
							</CustomButton>
						</form>
					</FormGroup>
				</Box>
			</Box>
		</div>
	);
};

export default Form;
