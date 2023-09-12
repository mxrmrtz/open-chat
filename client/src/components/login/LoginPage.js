import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import styles from "./loginPage.module.css";

const LoginPage = ({ getData, setCurrentUser }) => {
	const [showRegister, setShowRegister] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [message, setMessage] = useState("");

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
			const res = await fetch("/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(user),
			});
			if (res.status === 200) {
				setLoggedIn(true);
				getData();
				setCurrentUser(user.username);
			} else {
				setMessage("Incorrect username or password. Try again.");
				console.log("could not log in");
			}
		} catch (err) {
			console.log("could not log in");
		}
	};

	return (
		<>
			{!loading ? (
				loggedIn ? (
					<div>Welcome!</div>
				) : (
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
									<LoginForm logIn={logIn} setLoading={setLoading} />
									{message ? (
										<div className={styles.errorMessage}>{message}</div>
									) : (
										<></>
									)}
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
				)
			) : (
				<>loading</>
			)}
		</>
	);
};

export default LoginPage;
