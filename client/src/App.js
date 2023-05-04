import "./App.css";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";

function App() {
	const [messagesData, setMessagesData] = useState([]);

	const getData = async () => {
		try {
			const res = await fetch("/messages");
			const data = await res.json();
			setMessagesData(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			const res = await fetch(`/messages/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			getData();
		} catch (error) {
			alert("heck");
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="App-header">
			<h1>Wacky Chaty</h1>
			<ChatBox handleDelete={handleDelete} messagesData={messagesData} />
		</div>
	);
}

export default App;
