import styles from "./loginPage.module.css";

const LoginForm = ({ logIn, setLoading }) => {
	const handleLogIn = async (e) => {
		const user = { username: e.target[0].value, password: e.target[1].value };
		try {
			setLoading(true);
			await logIn(user);
		} finally {
			setLoading(false);
		}
		e.preventDefault();
		e.target[0].value = e.target[1].value = "";
	};

	return (
		<>
			<form className={styles.loginForm} onSubmit={handleLogIn}>
				<input
					className={styles.inputField}
					type="text"
					placeholder="username"
				/>
				<input
					className={styles.inputField}
					type="password"
					placeholder="password"
				/>
				<button className={styles.button} type="submit">
					Log In
				</button>
			</form>
		</>
	);
};

export default LoginForm;
