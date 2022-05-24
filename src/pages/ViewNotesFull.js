import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/view-notes-full.css";

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
		});
	}, []);

	return (
		<div className="view-notes-full-body animate__animated animate__bounceIn animate__fast">
			<Box className="view-notes-full">
				<Box className="note-bodies">
					<Typography
						variant="h4"
						gutterBottom
						component="div"
						style={{ color: "#a9ccff" }}
					>
						{note.title}
					</Typography>
				</Box>
				<Box className="note-bodies">
					<Typography
						variant="subtitle2"
						gutterBottom
						style={{ color: "#a9ccff" }}
					>
						{note.date}
					</Typography>
				</Box>
				<Box className="note-bodies">
					<Typography
						variant="h6"
						gutterBottom
						component="div"
						style={{ color: "#a9ccff" }}
					>
						{note.content}
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default ViewNotesFull;
