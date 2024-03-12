import React from 'react';

function App() {

	const isAdmin = true
	let text

	if (isAdmin) {
		text = <p>A user is a Admin</p>
	} 
	
	return <div>
		{text}
	</div>
		
}

export default App;
