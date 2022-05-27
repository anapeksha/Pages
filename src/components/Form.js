import { Box, FormGroup, Typography } from "@mui/material";
import format from "date-format";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { CustomButton, CustomTextField, Wrapper } from "../styles";

const Form = (props) => {
	const [successClass, setSuccessClass] = useState(
		"form animate__animated animate__zoomIn animate__fast"
	);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		var currentDate = format.asString("dd/MM/yyyy - hh:mm", new Date());
		var newID = nanoid();
		props.setInput({
			...props.input,
			id: newID,
			date: currentDate,
			[name]: value,
		});
	};

	const handleClick = () => {
		setSuccessClass(
			"form animate__animated animate__backOutRight animate__fast"
		);
	};

	return (
		<Wrapper>
			<Box className={successClass}>
				<Typography
					variant="h5"
					style={{ textAlign: "center", color: "#a9ccff" }}
				>
					Add Page
				</Typography>
				<FormGroup>
					<form
						onSubmit={props.handleSubmit}
						style={{ display: "flex", flexDirection: "column" }}
					>
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
							onClick={handleClick}
						>
							Add
						</CustomButton>
					</form>
				</FormGroup>
			</Box>
		</Wrapper>
	);
};

export default Form;
