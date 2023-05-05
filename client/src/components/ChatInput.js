import React from "react";
import { useState } from "react";
import styles from "./ChatInput.module.css";
import button from "../icons/submit_button.svg";

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
			<form className={styles.inputForm} method="post" onSubmit={handleSubmit}>
				<input
					className={styles.inputField}
					type="text"
					id="message"
					placeholder="say something nice"
					autoComplete="off"
					onChange={handleChange}
				/>
				<div className={styles.buttonContainer}>
					<button className={styles.submitButton} type="submit">
						<img className={styles.buttonImage} src={button} alt="submit" />
					</button>
				</div>
			</form>
		</>
	);
};

export default ChatInput;
