import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicCard from "../components/BasicCard";
import { deleteNote } from "../redux/reducers/noteReducer";
import "../styles/view-notes.css";

const ViewNotes = () => {
	const notes = useSelector((state) => state.note.notes);

	const dispatch = useDispatch();

	const notesDisplay = () => {
		//@ts-ignore
		return notes.map((note, i) => {
			return (
				<Grid item xs={6} sm={6} md={6}>
					<BasicCard
						title={note.title}
						date={note.date}
						content={note.content}
						key={i}
						handleDelete={() => dispatch(deleteNote(note))}
					/>
				</Grid>
			);
		});
	};

	return (
		<div className="view-notes-body">
			<Box
				sx={{
					height: "75vh",
					overflow: "auto",
					borderRadius: "5px",
					margin: "5vw 5vh",
				}}
				className="animate__animated animate__fadeIn animate__slower"
			>
				<Grid container spacing={0.75}>
					{notesDisplay()}
				</Grid>
			</Box>
		</div>
	);
};

export default ViewNotes;
