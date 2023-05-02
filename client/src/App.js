import "./App.css";
import { useEffect, useState } from "react";
import Messages  from "./components/Messages"

function App() {
	const [messages, setMessages] = useState({})

	
	useEffect( () => {
		const getData = async () => {
			const res = await fetch("/messages"); // replace with your Express server's URL
			const data = await res.json();
			setMessages(data);
		  };

		getData();
		
	}, []);
	return (
		<div className="App-header">
			<h1>wdawad</h1>
			<Messages messages={messages}/>
		</div>
	);
}

export default App;
