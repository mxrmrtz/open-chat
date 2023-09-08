import styles from "./loginPage.module.css";

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
			<div className={styles.container}>
				<p>Register an account</p>
				<form className={styles.loginForm} onSubmit={handleAccount}>
					<input
						className={styles.inputField}
						type="text"
						id="username"
						placeholder="username"
					/>
					<input
						className={styles.inputField}
						type="password"
						id="password"
						placeholder="password"
					/>
					<button className={styles.button} type="submit">
						Register
					</button>
				</form>
				<p>Already have an account?</p>
				<button
					className={styles.button}
					type="button"
					onClick={() => {
						setShowRegister(false);
					}}
				>
					Log in
				</button>
			</div>
		</>
	);
};

export default RegisterForm;
