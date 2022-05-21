import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import { Box, IconButton, Typography } from "@mui/material";
import "animate.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
	const [animatedClass, addClasses] = useState({
		text: "",
		button: "",
	});

	const navigate = useNavigate();

	const handleClick = () => {
		addClasses({
			text: "animate__animated animate__fadeOutUp animate__slow",
			button:
				"animate__animated animate__fadeOutDown animate__slow home-button",
		});

		setTimeout(() => {
			handleNavigate();
		}, 2100);
	};

	const handleNavigate = () => {
		navigate("add-note");
	};

	useEffect(() => {
		addClasses({
			text: "animate__animated animate__fadeInDown animate__slow",
			button: "animate__animated animate__fadeInUp animate__slow home-button",
		});
	}, []);

	return (
		<div>
			<Box className="home-body">
				<Box className={animatedClass.text}>
					<Typography variant="h2" className="home-welcome-text">
						Welcome to Pages
					</Typography>
					<Typography variant="h6" className="home-welcome-text">
						Start Writing
					</Typography>
				</Box>
				<Box className={animatedClass.button}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="write"
						sx={{ mr: 2, color: "#a9ccff" }}
						onClick={handleClick}
					>
						<DriveFileRenameOutlineRoundedIcon fontSize="inherit" />
					</IconButton>
				</Box>
			</Box>
		</div>
	);
};

export default Home;
