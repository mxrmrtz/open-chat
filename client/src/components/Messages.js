import styles from "./messages.module.css";

const Messages = ({ messagesData }) => {
	return (
		<>
			<div className={styles.container}>
				<ul>
					{messagesData.map((item) => {
						return (
							<li key={item.id}>
								<div className={styles.username}>
									<h3>{item.username}</h3>
								</div>
								<div className={styles.message}>
									<p className={styles.message_text}>{item.message}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Messages;
