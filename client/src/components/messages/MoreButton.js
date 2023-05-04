import { useState } from "react";
import more_miniIcon from "../../icons/more_mini.svg";
import editIcon from "../../icons/edit.svg";
import deleteIcon from "../../icons/delete.svg";
import styles from "./MoreButton.module.css";

const MoreButton = ({ className, id, handleDelete }) => {
	const [isShowing, setIsShowing] = useState(false);
	const [loading, setLoading] = useState(false);

	console.log(isShowing);

	return (
		<>
			<div
				className={`${className} ${styles.container}`}
				onMouseEnter={() => {
					setIsShowing(true);
				}}
				onMouseLeave={() => {
					setIsShowing(false);
				}}
			>
				{isShowing && (
					<div className={styles.more_actions}>
						<img src={editIcon} alt="edit button" />
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
