import "./App.css";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";

function App() {
	const [messagesData, setMessagesData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("/messages");
			const data = await res.json();
			setMessagesData(data);
		};
		getData();
	}, []);
	return (
		<div className="App-header">
			<h1>Wacky Chaty</h1>
			<ChatBox messagesData={messagesData} />
		</div>
	);
}

export default App;
