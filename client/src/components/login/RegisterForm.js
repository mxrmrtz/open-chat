import styles from "./loginPage.module.css";
import { useState } from "react";

const RegisterForm = ({ setShowRegister, createUser }) => {
	const [registrationComplete, setRegistrationComplete] = useState(false);

	const handleAccount = (e) => {
		const inputUserInfo = {
			username: e.target[0].value,
			password: e.target[1].value,
		};
		createUser(inputUserInfo);
		setRegistrationComplete(true);
		e.preventDefault();
		e.target[0].value = e.target[1].value = "";
	};

	return (
		<>
			<div className={styles.container}>
				{registrationComplete ? (
					<>
						<p>congrats, you have registered</p>
						<p>continue to log in</p>
						<button
							className={styles.button}
							type="button"
							onClick={() => {
								setShowRegister(false);
							}}
						>
							Log in
						</button>
					</>
				) : (
					<>
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
					</>
				)}
			</div>
		</>
	);
};

export default RegisterForm;
