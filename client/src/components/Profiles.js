import styles from "./profiles.module.css";
import avatar from "../icons/account_circle.png";

const Profiles = ({ className, messagesData }) => {
	return (
		<>
			<div className={`${styles.container} ${className}`}>
				<ul className={styles.profiles_container}>
					{messagesData.map((item) => {
						return (
							<li key={item.id}>
								<div className={styles.message}>
									<img src={avatar} alt="avatar icon" />
								</div>
								<div className={styles.username}>
									<h3>{item.username}</h3>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Profiles;
