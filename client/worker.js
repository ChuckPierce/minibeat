var timer;
function makeCall() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://api.chartbeat.com/live/toppages/v3/?apikey=317a25eccba186e0f6b558f45214c0e7&host=gizmodo.com', false);
	xhr.send();
	return xhr.responseText;
}

function update() {
	self.postMessage(makeCall());
	timer = setTimeout(update, 1000);
}

self.addEventListener('message', function(e) {
	if(timer) clearTimeout(timer);
	update();
}, false);