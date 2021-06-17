import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { SelectCartItemsCount } from "../../redux/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

import {
	CartItemsContainer,
	ShoppingIconContainer,
	ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartItemsContainer onClick={toggleCartHidden}>
		<ShoppingIconContainer />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartItemsContainer>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
	itemCount: SelectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
