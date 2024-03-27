import React from 'react';

function App() {
	function func(event) {
		console.log(event.target); // Конечный тэг
	}
	
	return <div>
		<button onClick={func}>act</button>
	</div>;
}

export default App;
