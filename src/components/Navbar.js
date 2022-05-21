import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }} className="navbar">
			<AppBar
				position="absolute"
				className="navbar"
				style={{ backgroundColor: "#282829", boxShadow: "black" }}
			>
				<Toolbar>
					<Box className="navbar-icon">
						<CreateRoundedIcon style={{ color: "#a9ccff" }} />
					</Box>
					<Typography variant="h6" component="div" sx={{ color: "#a9ccff" }}>
						<strong>Pages</strong>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
