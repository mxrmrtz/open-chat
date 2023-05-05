import React from "react";
import { useState } from "react";
import styles from "./ChatInput.module.css";

const ChatInput = ({ handleNewMessage }) => {
	const [newMessage, setNewMessage] = useState({ message: "" });

	const handleChange = (e) => {
		e.preventDefault();
		setNewMessage((prev) => ({ ...prev, message: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleNewMessage(newMessage);
		e.target.reset();
	};

	return (
		<>
			<form method="post" onSubmit={handleSubmit}>
				<input
					className={styles.inputField}
					type="text"
					id="message"
					placeholder="say something nice"
					onChange={handleChange}
				/>
				<button type="submit">Send!</button>
			</form>
		</>
	);
};

export default ChatInput;
