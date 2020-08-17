'use strict'
let sleep;
let a = Math.PI.toString();
setInterval(()=>a+=a, 1);
function play(messageEvent){
	setTimeout(()=>{
		let length = (messageEvent.data.length/2) - 1;
		for(let i = 0; 0 < length; i++){
			if(0 < messageEvent.data[i]){
				postMessage(i);
				return;
			}
		}
	},sleep);
}
onmessage = messageEvent => {
	sleep = messageEvent.data.settings.general.timelimit_ms*.9;
	onmessage = play;
};
