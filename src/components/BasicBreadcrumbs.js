import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import * as React from "react";
import { StyledLink } from "../styles";

const BasicBreadcrumbs = () => {
	return (
		<div role="presentation">
			<Breadcrumbs
				aria-label="breadcrumb"
				color="#93b6e3"
				separator={<NavigateNextIcon fontSize="small" />}
			>
				<StyledLink to="/Pages">Home</StyledLink>
				<StyledLink to="/Pages/add-note">Add</StyledLink>
				<StyledLink to="/Pages/view-note">View</StyledLink>
			</Breadcrumbs>
		</div>
	);
};

export default BasicBreadcrumbs;
