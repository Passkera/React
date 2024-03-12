import React from 'react';

function App() {

	const isAuth = false
	
	return <div>
		{ !isAuth && <p>You're not authorized</p>}
	</div>
		
}

export default App;
