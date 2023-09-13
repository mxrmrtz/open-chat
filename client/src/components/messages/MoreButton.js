import { useState } from "react";
import more_miniIcon from "../../icons/more_mini.svg";
import editIcon from "../../icons/edit.svg";
import deleteIcon from "../../icons/delete.svg";
import styles from "./MoreButton.module.css";

const MoreButton = ({
	id,
	message,
	setEditedMessage,
	handleDelete,
	setShowEdit,
	setCurrentId,
}) => {
	const [isShowing, setIsShowing] = useState(false);
	const [loading, setLoading] = useState(false);

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
								setEditedMessage((prev) => ({
									...prev,
									message: message,
								}));
								setCurrentId(id);
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
		</>
	);
};

export default MoreButton;
