import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/card.css";

const BasicCard = (props) => {
	return (
		<Card sx={{ minWidth: 275 }} className="card">
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{props.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{props.date}
				</Typography>
				<Typography variant="body2">{props.content}</Typography>
			</CardContent>
			<CardActions>
				<IconButton
					aria-label="delete-note"
					size="small"
					onClick={props.handleDelete}
				>
					<DeleteIcon fontSize="inherit" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default BasicCard;
