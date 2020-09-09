'use strict'
function play(messageEvent){
	let length = (messageEvent.data.length/2) - 2;
	for(let i = length; 0 <= i; i--){
		if(0 < messageEvent.data[i]){
			postMessage(i);
			return;
		}
	}
}
onmessage = messageEvent => {
	onmessage = play;
};
