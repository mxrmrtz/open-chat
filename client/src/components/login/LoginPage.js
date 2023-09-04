import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const LoginPage = () => {
	const [showRegister, setShowRegister] = useState(false);
	const [user, setUser] = useState({});

	console.log(user);

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

	return (
		<>
			{showRegister ? (
				<RegisterForm
					user={user}
					createUser={createUser}
					setShowRegister={setShowRegister}
				/>
			) : (
				<>
					<p>Log in</p>
					<LoginForm />
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
