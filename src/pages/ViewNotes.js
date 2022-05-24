import { Box, Grid } from "@mui/material";
import "animate.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicCard from "../components/BasicCard";
import { deleteNote } from "../redux/reducers/noteReducer";
import "../styles/view-notes.css";

const ViewNotes = () => {
	//@ts-ignore
	const notes = useSelector((state) => state.note.notes);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const notesDisplay = () => {
		//@ts-ignore
		return notes.map((note, i) => {
			return (
				<Grid item xs={"auto"} sm={"auto"} md={"auto"}>
					<BasicCard
						title={note.title}
						date={note.date}
						key={i}
						handleDelete={() => dispatch(deleteNote(note))}
						handleCardClick={() => navigate("/view-notes-full")}
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
