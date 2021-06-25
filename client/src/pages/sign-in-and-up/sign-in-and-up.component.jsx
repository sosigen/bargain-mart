import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInAndUpContainer } from "./sign-in-and-up.styles";

const signInAndUpPage = () => (
	<SignInAndUpContainer>
		<SignIn />
		<SignUp />
	</SignInAndUpContainer>
);
export default signInAndUpPage;
