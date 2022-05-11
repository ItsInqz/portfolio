let discordShown = false;
let clockToggled = true;

console.log("v1")

function clockTime() {
	let date = new Date();
	let h = date.getHours(); // 0 - 23
	let m = date.getMinutes(); // 0 - 59
	let s = date.getSeconds(); // 0 - 59
	let session = "AM";

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		session = "PM";
	}

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("myClock").innerText = time;
	document.getElementById("myClock").textContent = time;
	document.getElementById("myClock").innerHTML = time;

	if (clockToggled === true) {
		newPageTitle = time;
		document.querySelector('title').textContent = newPageTitle;
	}
	setTimeout(clockTime, 1000);
}

function revealDiscord() {
	if (discordShown === false) {
		document.getElementById("discordButton").innerHTML = "Inqz#9999";
		discordShown = true;
	} else {
		document.getElementById("discordButton").innerHTML = "Discord";
		discordShown = false;
	}
}

document.addEventListener('keypress', function (e) {
	if (e.key === 'c') {
		clockToggled = !clockToggled
		if (clockToggled === false) {
			document.title = "Inqz"
			alert("Clock has been stopped.")
		}
		if (clockToggled === true) {
			alert("Clock has been started.")
		}
	}

});
