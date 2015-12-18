

var timeTable = document.createElement('div');
document.body.appendChild(timeTable);
timeTable.innerHTML = '00:00:00:000';
timeTable.classList.add('time');
timeTable.setAttribute('type', 'button');

var wrapper = document.createElement('div');
document.body.appendChild(wrapper);
wrapper.classList.add('btns');

var startButton = document.createElement('button');
wrapper.appendChild(startButton);
startButton.classList.add('btn', 'btn-success', 'btn-green');
startButton.setAttribute('type', 'button');
startButton.innerHTML = 'Start';
startButton.addEventListener("click", startTimer);

var resetButton = document.createElement('button');
wrapper.appendChild(resetButton);
resetButton.classList.add('btn', 'btn-danger', 'btn-red');
resetButton.setAttribute('type', 'button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener("click", resetTimer);

var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var myTimer = '00:00:00:000';
var timerID;


function updateTime() {
	milliseconds += 4;
	
		if ( milliseconds === 996) {
			milliseconds = 0;
			seconds++;
		} 
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
		} 
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		} 

		if (milliseconds < 10) {
			millisecondsStr = '00' + milliseconds;
		} else if (milliseconds < 100) {
			millisecondsStr = '0' + milliseconds;
		} else {
			millisecondsStr = milliseconds.toString();
		}
		if (seconds < 10) {
			secondsStr = '0' + seconds;
		} else {
			secondsStr = seconds.toString();
		}
		if (minutes < 10) {
			minutesStr = '0' + minutes;
		} else {
			minutesStr = minutes.toString();
		}
		if (hours < 10) {
			hoursStr = '0' + hours;
		} else {
			hoursStr = hours.toString();
		}

	myTimer = hoursStr + ':' + minutesStr + ':' + secondsStr + ':' + millisecondsStr;
	timeTable.innerHTML = myTimer;
}

function startTimer(){
	startButton.classList.add('btn', 'btn-primary');
	startButton.classList.remove('btn-success', 'btn-warning');
	startButton.innerHTML = 'Pause';
	timerID = setInterval(updateTime, 4);
	startButton.removeEventListener("click", startTimer);
	startButton.addEventListener("click", pauseTimer);
}

function pauseTimer(){
	startButton.classList.add('btn-warning');
	startButton.classList.remove('btn-success');
	startButton.innerHTML = 'Continue';
	clearInterval(timerID);
	timeTable.innerHTML = myTimer;
	startButton.removeEventListener("click", pauseTimer);
	startButton.addEventListener("click", startTimer);
}

function resetTimer(){
	startButton.classList.remove('btn-warning', 'btn-primary');
	startButton.classList.add('btn-success');
	startButton.innerHTML = 'Start';
	timeTable.innerHTML = '00:00:00:000';
	clearInterval(timerID);
	startButton.removeEventListener("click", pauseTimer);
	startButton.addEventListener("click", startTimer);
	milliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
}

