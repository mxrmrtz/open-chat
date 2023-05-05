import { useState } from "react";
import more_miniIcon from "../../icons/more_mini.svg";
import editIcon from "../../icons/edit.svg";
import deleteIcon from "../../icons/delete.svg";
import styles from "./MoreButton.module.css";

const MoreButton = ({ id, handleDelete, handleEdit }) => {
	const [isShowing, setIsShowing] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [editedMessage, setEditedMessage] = useState({ message: "" });

	const handleEditSubmit = () => {
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
			<div
				className={styles.container}
				onMouseEnter={() => {
					setIsShowing(true);
				}}
				onMouseLeave={() => {
					setIsShowing(false);
				}}
			>
				{isShowing && (
					<div className={styles.more_actions}>
						<img
							src={editIcon}
							alt="edit button"
							onClick={async () => {
								setShowEdit(true);
								setIsShowing(false);
							}}
						/>
						<img
							src={deleteIcon}
							alt="delete button"
							onClick={async () => {
								setLoading(true);
								await handleDelete(id);
								setLoading(false);
							}}
						/>
					</div>
				)}

				<div className={styles.more_icon}>
					<img src={more_miniIcon} alt="click for more" />
				</div>
			</div>
			{showEdit && (
				<form method="put" onSubmit={handleEditSubmit}>
					<input
						type="text"
						placeholder="input new message"
						onChange={handleEditChange}
					/>
					<button type="submit">submit</button>
					<button onClick={() => setShowEdit(false)}>exit</button>
				</form>
			)}
		</>
	);
};

export default MoreButton;
