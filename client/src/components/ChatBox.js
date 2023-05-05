import styles from "./chatbox.module.css";
import ChatInput from "./ChatInput";
import Messages from "./messages/Messages.js";
import Profiles from "./Profiles";

const ChatBox = ({ messagesData, handleNewMessage }) => {
	return (
		<>
			<div className={styles.container}>
				<Profiles messagesData={messagesData} className={styles.profiles_container} />
				<div className={styles.chatbox_container}>
					<Messages messagesData={messagesData} />
					<ChatInput handleNewMessage={handleNewMessage} />
				</div>
			</div>
		</>
	);
};

export default ChatBox;
