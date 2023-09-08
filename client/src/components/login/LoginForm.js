const LoginForm = ({ logIn }) => {
	const handleLogIn = (e) => {
		const user = { username: e.target[0].value, password: e.target[1].value };
		logIn(user);
		e.preventDefault();
		console.log(e);

		e.target[0].value = e.target[1].value = "";
	};

	return (
		<form onSubmit={handleLogIn}>
			<input type="text" placeholder="username" />
			<input type="text" placeholder="password" />
			<button type="submit">Log In</button>
		</form>
	);
};

export default LoginForm;
