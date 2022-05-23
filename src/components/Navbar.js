import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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
						<Link to="/Pages">
							<DriveFileRenameOutlineTwoToneIcon style={{ color: "#a9ccff" }} />
						</Link>
					</Box>
					<Link to="/Pages" style={{ textDecoration: "none" }}>
						<Typography variant="h6" component="div" sx={{ color: "#a9ccff" }}>
							<strong>Pages</strong>
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
