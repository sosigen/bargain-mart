import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51J2FKVGo3pNi5tJZNDxLQnLi9nNAPwoFiJxS2L30InqEIEv4uE1r46ZegrY0oChDKVORYwh5MwoVF0M9mhdjpCCw006LypVyWr";
	const onToken = (token) => {
		console.log(token);
		alert("success!");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Bargain Mart"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
