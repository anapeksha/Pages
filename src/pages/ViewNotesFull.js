import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Notes, Wrapper } from "../styles";

const ViewNotesFull = () => {
	const { id } = useParams();
	//@ts-ignore
	const notes = useSelector((state) => state.note.notes);
	const [note, setNote] = useState({
		id: "",
		title: "",
		content: "",
		date: Date,
	});

	useEffect(() => {
		notes.find((data) => {
			if (data.id === id) {
				setNote({
					id: data.id,
					title: data.title,
					content: data.content,
					date: data.date,
				});
				return true;
			}
			return false;
		});
	}, []);

	return (
		<Wrapper
			className="animate__animated animate__bounceIn animate__fast"
			style={{ margin: "1.5vw" }}
		>
			<Notes className="view-notes-full">
				<Box>
					<Typography
						variant="h4"
						gutterBottom
						component="div"
						style={{ color: "#a9ccff" }}
					>
						{note.title}
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="subtitle2"
						gutterBottom
						style={{ color: "#a9ccff" }}
					>
						{
							// @ts-ignore
							note.date
						}
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="h6"
						gutterBottom
						component="div"
						style={{ color: "#a9ccff" }}
					>
						{note.content}
					</Typography>
				</Box>
			</Notes>
		</Wrapper>
	);
};

export default ViewNotesFull;
