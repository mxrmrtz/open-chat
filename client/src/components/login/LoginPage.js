import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const LoginPage = () => {
	const [showRegister, setShowRegister] = useState(false);

	return (
		<>
			{showRegister ? (
				<RegisterForm setShowRegister={setShowRegister} />
			) : (
				<>
					<LoginForm />
					<p>Don't have an account?</p>
					<button
						onClick={() => {
							setShowRegister(true);
						}}
					>
						Register
					</button>
				</>
			)}
		</>
	);
};

export default LoginPage;
