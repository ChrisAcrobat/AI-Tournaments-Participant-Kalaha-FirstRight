'use strict'
onmessage = messageEvent => {
	let length = (messageEvent.data.gameboard.length/2) - 2;
	let lengthFull = messageEvent.data.gameboard.length - 1;	// Do not count opposite store.
	let index = -1;
	// Go from right.
	for(let i = length; 0 <= i; i--){
		let stepsToStore = length - i + 1;
		// Look for first match to store.
		if(messageEvent.data.gameboard[i]%lengthFull === stepsToStore){
			index = i;
			postMessage(index);
			break;
		}
	}
	if(index === -1){
		// Select first from right with pallets.
		for(let i = length; 0 <= i; i--){
			if(0 < messageEvent.data.gameboard[i]){
				postMessage(i);
				break;
			}
		}
	}
};
