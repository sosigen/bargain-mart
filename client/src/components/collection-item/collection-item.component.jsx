import React from "react";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import {
	CollectionCustomButton,
	CollectionItemContainer,
	ImageContainer,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<ImageContainer imageUrl={imageUrl} className="image" />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<CollectionCustomButton
				className="custom-button"
				inverted
				onClick={() => addItem(item)}>
				ADD TO CART
			</CollectionCustomButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
