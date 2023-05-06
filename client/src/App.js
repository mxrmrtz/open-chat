import "./App.css";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";
import LoginPage from "./components/login/LoginPage";

function App() {
	const [messagesData, setMessagesData] = useState([]);

	// CREATE
	const handleNewMessage = async (newMessage) => {
		try {
			await fetch("/messages", {
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

	// READ
	const getData = async () => {
		try {
			const res = await fetch("/messages");
			const data = await res.json();
			setMessagesData(data);
		} catch (error) {
			console.error(error);
		}
	};

	// UPDATE
	const handleEdit = async (id, message) => {
		try {
			await fetch(`/messages/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(message),
			});
			getData();
		} catch (err) {
			alert("something went wrong in your put request", err);
		}
	};

	// DELETE
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
			<LoginPage />
			<ChatBox
				handleDelete={handleDelete}
				messagesData={messagesData}
				handleNewMessage={handleNewMessage}
				handleEdit={handleEdit}
			/>
		</div>
	);
}

export default App;
