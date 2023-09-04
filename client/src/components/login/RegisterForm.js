const RegisterForm = ({ setShowRegister }) => {
	return (
		<>
			<p>Register an account</p>
			<form>
				<input type="text" placeholder="username" />
				<input type="text" placeholder="password" />
				<button type="submit">Register</button>
			</form>
			<button
				type="button"
				onClick={() => {
					setShowRegister(false);
				}}
			>
				GO bakc to login
			</button>
		</>
	);
};

export default RegisterForm;
