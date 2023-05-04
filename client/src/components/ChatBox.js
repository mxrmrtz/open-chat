import styles from "./chatbox.module.css"
import Messages from "./messages/Messages";
import Profiles from "./Profiles";

const ChatBox = ({messagesData, handleDelete}) => {
	return (
		<>
			<div className={styles.container}>
				<Profiles messagesData={messagesData} className={styles.testing}/>
				<Messages handleDelete={handleDelete} messagesData={messagesData}/>
			</div>
		</>
	);
};

export default ChatBox