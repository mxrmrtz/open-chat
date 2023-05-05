import styles from "./chatbox.module.css";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Profiles from "./Profiles";

const ChatBox = ({ messagesData, handleNewMessage }) => {
	return (
		<>
			<div className={styles.container}>
				<Profiles messagesData={messagesData} className={styles.testing} />
				<div>
					<Messages messagesData={messagesData} />
					<ChatInput handleNewMessage={handleNewMessage} />
				</div>
			</div>
		</>
	);
};

export default ChatBox;
