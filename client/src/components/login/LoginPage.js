import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import styles from "./loginPage.module.css";

const LoginPage = ({ getData, setCurrentUser }) => {
	const [showRegister, setShowRegister] = useState(false);

	// CREATE
	const createUser = async (user) => {
		await fetch("/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
	};

	// LOG IN
	const logIn = async (user) => {
		try {
			await fetch("/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(user),
			});
			getData();
			setCurrentUser(user.username);
		} catch (err) {
			console.log("could not log in");
		}
	};

	return (
		<>
			{showRegister ? (
				<RegisterForm
					createUser={createUser}
					setShowRegister={setShowRegister}
				/>
			) : (
				<>
					<div className={styles.container}>
						<p>Log in</p>
						<LoginForm logIn={logIn} />
						<p>Don't have an account?</p>
						<button
							onClick={() => {
								setShowRegister(true);
							}}
							className={styles.button}
						>
							Register
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default LoginPage;
