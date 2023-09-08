const RegisterForm = ({ setShowRegister, createUser }) => {
	const handleAccount = (e) => {
		const inputUserInfo = {
			username: e.target[0].value,
			password: e.target[1].value,
		};
		createUser(inputUserInfo);
		e.preventDefault();
		e.target[0].value = e.target[1].value = "";
	};

	// const handleChange = (e) => {
	// 	e.target.id.preventDefault();
	// 	setUser((prev) => ({ ...prev, id: e.target.value }));
	// };

	return (
		<>
			<p>Register an account</p>
			<form onSubmit={handleAccount}>
				<input type="text" id="username" placeholder="username" />
				<input type="text" id="password" placeholder="password" />
				<button type="submit">Register</button>
			</form>
			<button
				type="button"
				onClick={() => {
					setShowRegister(false);
				}}
			>
				Already have an account?
			</button>
		</>
	);
};

export default RegisterForm;
