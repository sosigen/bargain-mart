import styled, { css } from "styled-components";

const descriptionWriting = css`
	width: 23%;
`;
export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const CheckoutImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const DescriptionContainer = styled.span`
	${descriptionWriting}
`;
export const QuantityContainer = styled.span`
	${descriptionWriting}
	display: flex;
	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
	}
`;

export const RemoveContainer = styled.span`
	padding-left: 12px;
	cursor: pointer;
`;
