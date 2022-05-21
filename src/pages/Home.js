import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Box, IconButton, Typography } from "@mui/material";
import "animate.css";
import React, { useState } from "react";
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
			button: "animate__animated animate__fadeOutDown animate__slow",
		});

		setTimeout(() => {
			handleNavigate();
		}, 2100);
	};

	const handleNavigate = () => {
		navigate("add-note");
	};

	return (
		<div>
			<Box className="home-body">
				<Box className={animatedClass.text}>
					<Typography variant="h2" className="home-welcome-text">
						Welcome to Pages
					</Typography>
				</Box>
				<Box className={animatedClass.button}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2, color: "#a9ccff" }}
						onClick={handleClick}
					>
						<AddCircleRoundedIcon fontSize="inherit" />
					</IconButton>
				</Box>
			</Box>
		</div>
	);
};

export default Home;
