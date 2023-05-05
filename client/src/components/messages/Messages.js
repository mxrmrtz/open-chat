import styles from "./messages.module.css";
import MoreButton from "./MoreButton";

const Messages = ({ messagesData, handleDelete, handleEdit }) => {
	return (
		<>
			<ul>
				{messagesData.map((item) => {
					return (
						<li key={item.id}>
							<div className={styles.username}>
								<h3>{item.username}</h3>
							</div>
							<div className={styles.message_container}>
								<div className={styles.message}>
									<p className={styles.message_text}>{item.message}</p>
								</div>
								<MoreButton
									id={item.id}
									handleDelete={handleDelete}
									handleEdit={handleEdit}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Messages;
