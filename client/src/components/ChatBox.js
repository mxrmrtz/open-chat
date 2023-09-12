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
				<>
					<button
						onClick={async () => {
							try {
								setLoading(true);
								await logOut();
							} finally {
								setLoading(false);
							}
						}}
					>
						log out msg
					</button>
					<div className={styles.container}>
						<Profiles
							messagesData={messagesData}
							className={styles.profiles_container}
						/>
						<div className={styles.chatbox_container}>
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
				</>
			) : (
				<>logging you out</>
			)}
		</>
	);
};

export default ChatBox;
