import React from 'react';

function App() {

	function ShowMess(text) {
		alert(text);
	}
	
	return <div>
		<button onClick={() => ShowMess('1')}>act1</button>
		<button onClick={() => ShowMess('2')}>act2</button>
		<button onClick={() => ShowMess('3')}>act3</button>
	</div>;
}

export default App;
