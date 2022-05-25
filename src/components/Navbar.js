import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import BasicBreadcrumbs from "./BasicBreadcrumbs";

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
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						<Link
							to="/Pages"
							style={{ textDecoration: "none", color: "#a9ccff" }}
						>
							<strong>Pages</strong>
						</Link>
					</Typography>
					<BasicBreadcrumbs />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
