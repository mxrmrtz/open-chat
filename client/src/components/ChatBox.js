import { useRef, useState } from "react";
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
	getData,
}) => {
	const [loading, setLoading] = useState(false);
	const lastMessageRef = useRef();

	const scrollToLastMessage = () => {
		const lastMessage = lastMessageRef.current?.lastElementChild;
		lastMessage?.scrollIntoView({ behavior: "smooth" });
	};

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
					<div className={styles.fullChatBoxContainer}>
						<Profiles
							messagesData={messagesData}
							className={styles.profiles_container}
						/>
						<div className={styles.messagesContainer}>
							<div className={styles.chatboxContainer}>
								<Messages
									handleDelete={handleDelete}
									messagesData={messagesData}
									handleEdit={handleEdit}
									currentUser={currentUser}
									lastMessageRef={lastMessageRef}
								/>
							</div>
							<ChatInput
								handleNewMessage={handleNewMessage}
								currentUser={currentUser}
								lastMessageRef={lastMessageRef}
								scrollToLastMessage={scrollToLastMessage}
								getData={getData}
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
