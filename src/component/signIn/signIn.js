import React, { useRef } from "react";
import createMakeStyle from "./signIn.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { requestLogin } from "../../actions";

const useStyle = createMakeStyle();

const SignIn = ({ userInfo, login }) => {
	const classes = useStyle();
	const username = useRef(null);
	const password = useRef(null);

	const onLogin = (e) => {
		e.preventDefault();

		if (!username.value || !password.value) {
			return;
		}

		const data = {
			username: username.value,
			password: password.value,
		};

		login(data);
	};

	return (
		<>
			<div className={classes.signInWrapper}>
				<form noValidate autoComplete="off" onSubmit={login}>
					<div className={classes.signInForm}>
						<h1>Login page</h1>
						<input type="text" ref={username} />
						<input type="text" ref={password} />
						<button onClick={onLogin}>Sign in</button>
					</div>
				</form>
			</div>
		</>
	);
};

SignIn.propTypes = {
	onSignIn: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	userInfo: state.userInfo
});

const mapDispatchToProps = dispatch => ({
	login: info => dispatch(requestLogin(info))
});

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignIn;
