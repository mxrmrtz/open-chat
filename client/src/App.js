import "./App.css";
import { useEffect, useState, useCallback } from "react";
import ChatBox from "./components/ChatBox";
import LoginPage from "./components/login/LoginPage";

function App() {
	const [messagesData, setMessagesData] = useState([]);
	const [accessToken, setAccessToken] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState([]);

	// GET ACCESS TOKEN
	const getAccessToken = useCallback(async () => {
		try {
			const res = await fetch("/refresh", {
				method: "GET",
			});
			const accessToken = await res.json();
			setAccessToken(accessToken.accessToken);
		} catch (err) {
			console.error("couldn't retreieve access token", err);
		}
	}, []);

	// LOG OUT
	const logOut = async () => {
		try {
			await fetch("/logout", {
				method: "GET",
			});
			setMessagesData([]);
			setAccessToken("");
			setLoggedIn(false);
			setCurrentUser("");
			localStorage.removeItem("currentUser");
		} catch (err) {
			console.error(err);
		}
	};

	// CREATE
	const handleNewMessage = async (newMessage) => {
		try {
			await fetch("/messages", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: accessToken,
				},
				body: JSON.stringify(newMessage),
			});
		} catch (err) {
			alert("something went wrong in the post request", err);
		}
		getData();
	};

	// READ
	const getData = useCallback(async () => {
		try {
			getAccessToken();
			const res = await fetch("/messages", {
				method: "GET",
				headers: {
					authorization: accessToken,
				},
			});
			const data = await res.json();
			setLoggedIn(true);
			setMessagesData(data);
		} catch (error) {
			console.error("there is an issue", error);
		}
	}, [accessToken, getAccessToken]);

	// UPDATE
	const handleEdit = async (id, message) => {
		try {
			await fetch(`/messages/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: accessToken,
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
			await fetch(`/messages/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: accessToken,
				},
			});
			getData();
		} catch (error) {
			alert("heck");
		}
	};

	useEffect(() => {
		getAccessToken();
		getData();
		setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
	}, [getData, getAccessToken, currentUser]);

	return (
		<div className="App-header">
			<h1>Wacky Chaty</h1>
			{!loggedIn ? (
				<LoginPage getData={getData} setCurrentUser={setCurrentUser} />
			) : (
				<>
					<p>Hello {currentUser}!</p>
					<ChatBox
						handleDelete={handleDelete}
						messagesData={messagesData}
						handleNewMessage={handleNewMessage}
						handleEdit={handleEdit}
						currentUser={currentUser}
						logOut={logOut}
					/>
				</>
			)}
		</div>
	);
}

export default App;
