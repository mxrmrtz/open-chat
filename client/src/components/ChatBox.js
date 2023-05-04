import styles from "./chatbox.module.css"
import Messages from "./Messages";
import Profiles from "./Profiles";

const ChatBox = ({messagesData}) => {
	return (
		<>
			<div className={styles.container}>
				<Profiles messagesData={messagesData} className={styles.testing}/>
				<Messages messagesData={messagesData}/>
			</div>
		</>
	);
};

export default ChatBox