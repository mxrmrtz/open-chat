import styles from "./profiles.module.css";
import avatar from "../icons/account_circle.png";

const Profiles = ({ className, messagesData }) => {
	// const sortedMessages = messagesData.sort((a, b) => a.id - b.id);

	let uniqueProfiles = [];
	const profiles = messagesData.filter((user) => {
		if (uniqueProfiles.includes(user.username)) {
			return;
		} else {
			uniqueProfiles.push(user.username);
		}
		return uniqueProfiles;
	});

	return (
		<>
			<div className={`${styles.container} ${className}`}>
				<ul className={styles.profiles_container}>
					{profiles.map((item) => {
						return (
							<li className={styles.profile} key={item.id}>
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
