import styles from "./messages.module.css";
import MoreButton from "./MoreButton";

const Messages = ({ messagesData, handleDelete, handleEdit, currentUser }) => {
	const sortedMessages = messagesData.sort((a, b) => a.id - b.id);
	return (
		<>
			<ul>
				{sortedMessages.map((item) => {
					let allowedToEdit;
					let ownMessage;
					if (currentUser === item.username) {
						allowedToEdit = true;
						ownMessage = true;
					} else {
						allowedToEdit = false;
						ownMessage = false;
					}

					return (
						<li
							className={
								ownMessage ? styles.message_left : styles.message_right
							}
							key={item.id}
						>
							<div className={styles.username}>
								<h3>{item.username}</h3>
							</div>
							<div className={styles.message_container}>
								<div className={styles.message}>
									<p className={styles.message_text}>{item.message}</p>
								</div>
								{allowedToEdit ? (
									<MoreButton
										id={item.id}
										handleDelete={handleDelete}
										handleEdit={handleEdit}
									/>
								) : (
									<></>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Messages;
