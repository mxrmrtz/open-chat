import styles from "./chatbox.module.css";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Profiles from "./Profiles";

const ChatBox = ({ messagesData }) => {
	return (
		<>
			<div className={styles.container}>
				<Profiles messagesData={messagesData} className={styles.testing} />
				<div>
					<Messages messagesData={messagesData} />
					<ChatInput />
				</div>
			</div>
		</>
	);
};

export default ChatBox;
