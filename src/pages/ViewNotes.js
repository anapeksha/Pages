import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicCard from "../components/BasicCard";
import getData from "../controllers/getData";
import "../styles/view-notes.css";

const ViewNotes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		getData.then((data) => {
			setNotes(data);
		});
	}, []);

	const notesDisplay = () => {
		if (notes !== null) {
			return notes.map((note) => {
				return (
					<Grid item xs={6} sm={6} md={6}>
						<BasicCard
							title={note.title}
							date={note.date}
							content={note.content}
						/>
					</Grid>
				);
			});
		}
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
