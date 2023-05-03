const Messages = ({messagesData}) => {
	return (
		<>
		{messagesData.map((item) => {
			return(<div key={item.id}>
				<h3>{item.username}</h3>
				<p>{item.message}</p>
			</div>)
			
		})}
		</>
	)
}

export default Messages;