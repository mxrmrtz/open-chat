import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const LoginPage = ({ getData, setLoggedIn }) => {
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
		await fetch("/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(user),
		});
		getData();
		setLoggedIn(true);

		console.log("i am loggign in");
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
					<p>Log in</p>
					<LoginForm logIn={logIn} />
					<p>Don't have an account?</p>
					<button
						onClick={() => {
							setShowRegister(true);
						}}
					>
						Register
					</button>
					<button onClick={createUser}>test</button>
				</>
			)}
		</>
	);
};

export default LoginPage;
