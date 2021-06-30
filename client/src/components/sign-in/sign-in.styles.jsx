import styled from "styled-components";
export const SigninContainer = styled.div`
	width: 30vw;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		width: 90vw;
		margin-bottom: 50px;
		align-items: center;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 1400px) {
		flex-direction: column;
		button{
			margin: 10px 0;
		}}
	}
`;

export const TitleContainer = styled.h2`
	margin: 10px 0;
`;
