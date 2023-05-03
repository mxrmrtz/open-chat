import "./App.css";
import { useEffect, useState } from "react";
import Messages  from "./components/Messages"

function App() {
	const [messagesData, setMessagesData] = useState([])

	
	useEffect( () => {
		const getData = async () => {
			const res = await fetch("/messages"); // replace with your Express server's URL
			const data = await res.json();
			setMessagesData(data);
		  };

		getData();
		
	}, []);
	return (
		<div className="App-header">
			<h1>wdawad</h1>
			<Messages messagesData={messagesData}/>
		</div>
	);
}

export default App;
