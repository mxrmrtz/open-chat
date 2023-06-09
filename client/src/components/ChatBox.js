import styles from "./chatbox.module.css";
import ChatInput from "./ChatInput";
import Messages from "./messages/Messages";
import Profiles from "./Profiles";


const ChatBox = ({
	handleDelete,
	messagesData,
	handleNewMessage,
	handleEdit,
}) => {
	return (
		<>
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
					/>
					<ChatInput handleNewMessage={handleNewMessage} />
				</div>
			</div>
		</>
	);
};

export default ChatBox;
