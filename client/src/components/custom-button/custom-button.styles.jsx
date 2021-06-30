import styled, { css } from "styled-components";

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;
const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;
const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}
	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	border: none;
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border: none;
	cursor: pointer;
	font-family: "Open Sans";
	display: flex;
	justify-content: center;

	${getButtonStyles}
	@media screen and (max-width: 500px) {
		font-size: 12px;
		min-width: unset;
	}
	@media screen and (max-width: 400px) {
		font-size: 11px;
		min-width: unset;
	}
`;