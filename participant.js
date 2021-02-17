'use strict'
ParticipantHelper.onmessage = data => {
	let length = (data.length/2) - 2;
	for(let i = length; 0 <= i; i--){
		if(0 < data[i]){
			ParticipantHelper.respond(i);
			return;
		}
	}
}
