import React from 'react';

function App() {

	const age = 19
	
	return <div>
		{(age < 19)? <p>Younger than 19</p> : <p>Older than 19</p>}
	</div>
		
}

export default App;
