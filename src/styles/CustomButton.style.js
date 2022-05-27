import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomButton = styled(Button)({
	padding: "6px 12px",
	border: "1px solid",
	lineHeight: 1.5,
	backgroundColor: "#a9ccff",
	borderColor: "#a9ccff",
	"&:hover": {
		backgroundColor: "#95b9e7",
		borderColor: "#95b9e7",
		boxShadow: "none",
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: "#8aabd6",
		borderColor: "#8aabd6",
	},
	"&:focus": {
		boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
	},
});

export default CustomButton;
