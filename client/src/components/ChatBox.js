import styles from "./chatbox.module.css";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Profiles from "./Profiles";

const ChatBox = ({ messagesData }) => {
	const handleNewMessage = async (newMessage) => {
		try {
			await fetch("/message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newMessage),
			});
		} catch (err) {
			alert("something went wrong in the post request", err);
		}
	};

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
