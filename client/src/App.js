import "./App.css";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";

function App() {
	const [messagesData, setMessagesData] = useState([]);

	const getData = async () => {
		const res = await fetch("/messages");
		const data = await res.json();
		setMessagesData(data);
	};

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
		getData();
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="App-header">
			<h1>Wacky Chaty</h1>
			<ChatBox
				messagesData={messagesData}
				handleNewMessage={handleNewMessage}
			/>
		</div>
	);
}

export default App;
