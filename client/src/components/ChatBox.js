import { useState } from "react";
import styles from "./chatbox.module.css";
import ChatInput from "./ChatInput";
import Messages from "./messages/Messages";
import Profiles from "./Profiles";

const ChatBox = ({
	handleDelete,
	messagesData,
	handleNewMessage,
	handleEdit,
	currentUser,
	logOut,
}) => {
	const [loading, setLoading] = useState(false);

	return (
		<>
			{!loading ? (
				<div className={styles.fullContainer}>
					<button
						className={styles.button}
						onClick={async () => {
							try {
								setLoading(true);
								await logOut();
							} finally {
								setLoading(false);
							}
						}}
					>
						Log out
					</button>
					<div className={styles.messagesContainer}>
						<Profiles
							messagesData={messagesData}
							className={styles.profiles_container}
						/>
						<div className={styles.chatboxContainer}>
							<Messages
								handleDelete={handleDelete}
								messagesData={messagesData}
								handleEdit={handleEdit}
								currentUser={currentUser}
							/>
							<ChatInput
								handleNewMessage={handleNewMessage}
								currentUser={currentUser}
							/>
						</div>
					</div>
				</div>
			) : (
				<>logging you out</>
			)}
		</>
	);
};

export default ChatBox;
