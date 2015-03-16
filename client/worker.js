addEventListener('updateChart', function() {
	makeCall();
    postMessage('Im reading Tech.pro');
}, false);

function makeCall() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://api.chartbeat.com/live/toppages/v3/?apikey=317a25eccba186e0f6b558f45214c0e7&host=gizmodo.com', false);
	xhr.send();
	console.log(xhr.responseText);
}