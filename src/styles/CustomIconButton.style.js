import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIconButton = styled(IconButton)({
	marginRight: 2,
	color: "#a9ccff",
	"&:hover": {
		color: "#83a3cc",
	},
});

export default CustomIconButton;