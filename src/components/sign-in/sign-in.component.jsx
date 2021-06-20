import React, { useState } from "react";
import {
	SigninContainer,
	ButtonsContainer,
	TitleContainer,
} from "./sign-in.styles";

import { connect } from "react-redux";

import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: "pasismichael@gmail.com",
		password: "Michael",
	});
	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		emailSignInStart({ email, password });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SigninContainer>
			<TitleContainer>I already have account</TitleContainer>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="email"
					handleChange={handleChange}
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					label="password"
					handleChange={handleChange}
					required
				/>
				<ButtonsContainer>
					<CustomButton type="submit">sign in</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn>
						sign in with Google
					</CustomButton>
				</ButtonsContainer>
			</form>
		</SigninContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: ({ email, password }) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
