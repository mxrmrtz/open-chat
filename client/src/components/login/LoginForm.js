const LoginForm = ({ logIn }) => {
	const handleLogIn = (e) => {
		const user = { username: e.target[0].value, password: e.target[1].value };
		logIn(user);
		e.preventDefault();
		e.target[0].value = e.target[1].value = "";
	};

	return (
		<form onSubmit={handleLogIn}>
			<input type="text" placeholder="username" />
			<input type="password" placeholder="password" />
			<button type="submit">Log In</button>
		</form>
	);
};

export default LoginForm;
