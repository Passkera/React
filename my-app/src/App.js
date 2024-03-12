import React from 'react';

function App() {

	const isAuth = true
	
	return <div>
		{ isAuth && <p>You're authorized</p>}
	</div>
		
}

export default App;
