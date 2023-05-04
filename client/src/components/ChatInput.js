import React from "react";
import styles from "./ChatInput.module.css";

const ChatInput = () => {
	const handleSubmit = () => {
		return;
	};
	const handleChange = () => {
		return;
	};

	return (
		<>
			<form action="post" onSubmit={handleSubmit}>
				<input
					className={styles.inputField}
					type="text"
					id="message"
					placeholder="say something nice"
					onChange={handleChange}
				/>
			</form>
		</>
	);
};

export default ChatInput;
