import styled from "styled-components";

const { Theme } = require("./Theme");

export const mainTheme = new Theme(
	{
		primary: "#53B5AB",
		secondary: "white",
		disabled: "rgba(83, 181, 171, 0.5)",
		header: "#2F464B",
		text: "#2F464B",
		placeholder: "#ABABAB",
		font: "Poppins-Medium",
		aBlack: "#504f54",
		error: "#DD1010",
		instructions: "rgba(47,72,75,0.6)",
		main: "#53B4AB",
		background: "#FAFAFA",
		recording: "#BC301F",
		YES: "rgb(186,34,34)",
		SOMEWHAT: "rgb(199,154,0)",
		NO: "rgb(74,181,117)",
	},
	{
		paddingHorizontal: "20px",
		paddingTop: "20px",
	}
);

// export const withPadding = (Comp) => ({ ...props }) => styled(Comp)``;
