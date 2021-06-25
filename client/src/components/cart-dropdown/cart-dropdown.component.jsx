import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import { withRouter } from "react-router-dom";

import { SelectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
	CartDropdownContainer,
	CartItemsContainer,
	emptyMessageContainer,
	DropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<emptyMessageContainer>Your cart is empty</emptyMessageContainer>
			)}
		</CartItemsContainer>
		<DropdownButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}>
			CHECKOUT
		</DropdownButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: SelectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
