import React from "react";
import {
	CartItemContainer,
	ItemDetailsContainer,
	CartItemImg,
	NameContainer,
	PriceContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<CartItemImg src={imageUrl} alt="item" />
		<ItemDetailsContainer>
			<NameContainer>{name}</NameContainer>
			<PriceContainer>${price}</PriceContainer>
		</ItemDetailsContainer>
	</CartItemContainer>
);
export default CartItem;
