import React from 'react';

function App() {

	function GetDigitSum(val){
		let result = 0;

		for(let i = 0; i < String(val).length; i++){
			console.log(String(val)[i])
			result += Number(String(val)[i])
		}
			
		return result;
	}
	
	return <div>
		<p>{GetDigitSum(43523)}</p>
	</div>
		
}

export default App;
