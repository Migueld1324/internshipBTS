function humanReadable(seconds){
	var secs = 0;
	var mins = 0;
	var hours = 0;
	if(seconds >= 60){
		secs = seconds % 60;
		seconds -= secs;
		mins = seconds / 60;
		console.log(hours, mins, secs);
	}
	if(mins >= 60){
		seconds = mins;
		mins = seconds % 60;
		seconds -= mins;
		hours = mins / 60;
		console.log(hours, mins, secs);
	}
	console.log(seconds);
	seconds = '';
	seconds = hours + ':' + mins + ':' + secs;
	return seconds;
}
console.log(humanReadable(4521));