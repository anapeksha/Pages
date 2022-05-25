import Breadcrumbs from "@mui/material/Breadcrumbs";
import * as React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BasicBreadcrumbs = () => {
	return (
		<div role="presentation">
			<Breadcrumbs
				aria-label="breadcrumb"
				color="#93b6e3"
				separator={<NavigateNextIcon fontSize="small" />}
			>
				<Link to="/Pages" style={{ textDecoration: "none", color: "#a9ccff" }}>
					Home
				</Link>
				<Link
					to="/Pages/add-note"
					style={{ textDecoration: "none", color: "#a9ccff" }}
				>
					Add
				</Link>
				<Link
					to="/Pages/view-note"
					style={{ textDecoration: "none", color: "#a9ccff" }}
				>
					View
				</Link>
			</Breadcrumbs>
		</div>
	);
}

export default BasicBreadcrumbs;
