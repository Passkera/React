import React from 'react';

function App() {

	let isAdult = false
	let text

	if (isAdult) {
		text = <p>A user is a adult</p>
	} else {
		text = <p>A user isn't a adult</p>	
	}
	
	return <div>
		{text}
	</div>
		
}

export default App;
