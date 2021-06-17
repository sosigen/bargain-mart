import React from "react";
import {
	SigninContainer,
	ButtonsContainer,
	TitleContainer,
} from "./sign-in.styles";

import { signInWithGoole, auth } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (e) {
			console.log(e);
		}
		this.setState({
			email: "",
			password: "",
		});
	};
	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<SigninContainer>
				<TitleContainer>I already have account</TitleContainer>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						label="email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<ButtonsContainer>
						<CustomButton type="submit">sign in</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoole}
							isGoogleSignIn>
							sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SigninContainer>
		);
	}
}
