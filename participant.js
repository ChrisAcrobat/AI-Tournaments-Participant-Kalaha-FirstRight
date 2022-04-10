'use strict'
onmessage = init => {
	onmessage = message => {
		let data = message.data;
		let length = (data.length/2) - 2;
		for(let i = length; 0 <= i; i--){
			if(0 < data[i]){
				postMessage(i);
				return;
			}
		}
	}
}
