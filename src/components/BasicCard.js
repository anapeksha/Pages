import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";

const BasicCard = (props) => {
	return (
		<Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#323232" }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="#a9ccff" gutterBottom>
					{props.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="#a9ccff">
					{props.date}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton
					aria-label="delete-note"
					size="small"
					onClick={props.handleDelete}
					sx={{ color: "#a9ccff" }}
				>
					<DeleteIcon fontSize="inherit" />
				</IconButton>
				<IconButton
					aria-label="delete-note"
					size="small"
					onClick={props.handleCardClick}
					sx={{ color: "#a9ccff" }}
				>
					<ArrowCircleRightRoundedIcon fontSize="inherit" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default BasicCard;
