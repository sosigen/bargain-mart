import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
	SelectCartItems,
	SelectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
	CheckoutHeaderContainer,
	CheckoutPageContainer,
	TestWarning,
	TotalContainer,
} from "./checkout.styled";

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</CheckoutHeaderContainer>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalContainer>TOTAL: ${total}</TotalContainer>
		<TestWarning>
			*Please use the following for payment*
			<br />
			4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
		</TestWarning>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: SelectCartItems,
	total: SelectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
