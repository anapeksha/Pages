import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
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

	const [buttonAnimation, setAnimation] = useState({
		view: "",
		add: "",
	});

	const navigate = useNavigate();

	const handleClickWrite = () => {
		addClasses({
			text: "animate__animated animate__fadeOutUp animate__slow",
			button:
				"animate__animated animate__fadeOutDown animate__slow home-button",
		});

		setAnimation({
			view: "",
			add: "animate__animated animate__bounce animate__faster",
		});

		setTimeout(() => {
			handleNavigateAdd();
		}, 2100);
	};

	const handleClickView = () => {
		addClasses({
			text: "animate__animated animate__fadeOutUp animate__slow",
			button:
				"animate__animated animate__fadeOutDown animate__slow home-button",
		});
		setAnimation({
			view: "animate__animated animate__bounce animate__faster",
			add: "",
		});
		setTimeout(() => {
			handleNavigateView();
		}, 2100);
	};

	const handleNavigateAdd = () => {
		navigate("add-note");
	};

	const handleNavigateView = () => {
		navigate("view-note");
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
						Start Writing / View Notes
					</Typography>
				</Box>
				<Box className={animatedClass.button}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="write"
						sx={{ mr: 2, color: "#a9ccff" }}
						onClick={handleClickWrite}
						className={buttonAnimation.add}
					>
						<DriveFileRenameOutlineRoundedIcon fontSize="large" />
					</IconButton>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="write"
						sx={{ mr: 2, color: "#a9ccff" }}
						onClick={handleClickView}
						className={buttonAnimation.view}
					>
						<VisibilityRoundedIcon fontSize="large" />
					</IconButton>
				</Box>
			</Box>
		</div>
	);
};

export default Home;
