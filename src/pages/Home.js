import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomIconButton, Wrapper } from "../styles";

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
			<Wrapper>
				<Box
					className={animatedClass.text}
					style={{ color: "#a9ccff", textAlign: "center" }}
				>
					<Typography variant="h2">Welcome to Pages</Typography>
					<Typography variant="h6">Start Writing / View Notes</Typography>
				</Box>
				<Box className={animatedClass.button}>
					<CustomIconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="write"
						onClick={handleClickWrite}
						className={buttonAnimation.add}
					>
						<DriveFileRenameOutlineRoundedIcon fontSize="large" />
					</CustomIconButton>
					<CustomIconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="write"
						onClick={handleClickView}
						className={buttonAnimation.view}
					>
						<VisibilityRoundedIcon fontSize="large" />
					</CustomIconButton>
				</Box>
			</Wrapper>
		</div>
	);
};

export default Home;
