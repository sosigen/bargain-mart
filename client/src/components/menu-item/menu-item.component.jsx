import React from "react";
import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	TitleContainer,
	SubtitleContainer,
} from "./menu-item.styles";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<ContentContainer>
			<TitleContainer>{title.toUpperCase()}</TitleContainer>
			<SubtitleContainer>SHOP NOW</SubtitleContainer>
		</ContentContainer>
	</MenuItemContainer>
);

export default withRouter(MenuItem);
