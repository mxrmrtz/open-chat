import { useState } from "react";

const RegisterForm = ({ setShowRegister, createUser, user }) => {
	const [newUser, setNewUser] = useState(null);

	const handleAccount = (e) => {
		const inputUser = {
			username: e.target[0].value,
			password: e.target[1].value,
		};
		console.log(inputUser);
		createUser(inputUser);

		e.preventDefault();
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
