import styles from "./messages.module.css";
import { useState } from "react";
import MoreButton from "./MoreButton";

const Messages = ({
	messagesData,
	handleDelete,
	handleEdit,
	currentUser,
	lastMessageRef,
}) => {
	const [showEdit, setShowEdit] = useState(false);
	const [editedMessage, setEditedMessage] = useState({ message: "" });
	const [currentId, setCurrentId] = useState();

	const sortedMessages = messagesData.sort((a, b) => a.id - b.id);

	const handleEditSubmit = (id) => {
		handleEdit(id, editedMessage);
		setShowEdit(false);
	};

	const handleEditChange = (e) => {
		e.preventDefault();
		setEditedMessage((prev) => ({ ...prev, message: e.target.value }));
		console.log(editedMessage);
	};

	return (
		<>
			<ul ref={lastMessageRef}>
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
								{showEdit && currentId === item.id ? (
									<div className={styles.message}>
										<form
											method="put"
											onSubmit={() => {
												handleEditSubmit(item.id);
											}}
											className={styles.editMessage_form}
										>
											<input
												value={editedMessage.message}
												type="text"
												placeholder="input new message"
												className={styles.editMessage_input}
												onChange={handleEditChange}
											/>
											<div className={styles.editMessage_buttonContainer}>
												<button type="submit">submit</button>
												<button
													type="button"
													onClick={() => setShowEdit(false)}
												>
													cancel
												</button>
											</div>
										</form>
									</div>
								) : (
									<div className={styles.message}>
										<p className={styles.message_text}>{item.message}</p>
									</div>
								)}

								{allowedToEdit && !showEdit ? (
									<MoreButton
										id={item.id}
										message={item.message}
										setEditedMessage={setEditedMessage}
										handleDelete={handleDelete}
										setShowEdit={setShowEdit}
										setCurrentId={setCurrentId}
									/>
								) : (
									<></>
								)}
							</div>
							{item.createdAt !== item.updatedAt ? (
								<p className={styles.editedText}>(edited)</p>
							) : (
								<></>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Messages;
