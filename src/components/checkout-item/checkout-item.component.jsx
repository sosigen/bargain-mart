import React from "react";

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import {
	CheckoutItemContainer,
	CheckoutImageContainer,
	DescriptionContainer,
	QuantityContainer,
	RemoveContainer,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<CheckoutImageContainer>
				<img className="" src={imageUrl} alt="item" />
			</CheckoutImageContainer>
			<DescriptionContainer>{name}</DescriptionContainer>
			<QuantityContainer>
				<div onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem(cartItem)}>&#10095;</div>
			</QuantityContainer>
			<DescriptionContainer>{price}</DescriptionContainer>
			<RemoveContainer onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
