'use strict'
onmessage = messageEvent => {
	postMessage(messageEvent.data.gameboard.length/2);
};
