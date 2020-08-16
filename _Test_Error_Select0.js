'use strict'
function play(messageEvent){
	let length = (messageEvent.data.length/2) - 1;
	for(let i = 0; 0 < length; i++){
		if(0 === messageEvent.data[i]){
			postMessage(i);
			return;
		}
	}
	for(let i = 0; 0 < length; i++){
		if(0 < messageEvent.data[i]){
			postMessage(i);
			break;
		}
	}
}
onmessage = messageEvent => {
	onmessage = play;
};
