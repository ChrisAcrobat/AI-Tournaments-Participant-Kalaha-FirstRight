'use strict'
onmessage = messageEvent => {
	let length = (messageEvent.data.gameboard.length/2) - 2;
	let lengthFull = messageEvent.data.gameboard.length - 1;	// Do not count opposite store.
	// Go from right.
	for(let i = length; 0 <= i; i--){
		let stepsToStore = length - i + 1;
		// Look for first match to store from right.
		if(messageEvent.data.gameboard[i]%lengthFull === stepsToStore){
			postMessage(i);
			return;
		}
	}
	// Select first from right with pallets.
	for(let i = length; 0 <= i; i--){
		if(0 < messageEvent.data.gameboard[i]){
			postMessage(i);
			return;
		}
	}
};
