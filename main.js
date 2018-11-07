$(document).ready(function() {
	setInterval(function() {
		let today = new Date()

		let year = today.getFullYear()

		let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		let monthName = monthNames[today.getMonth()]

		let month = today.getMonth()
		if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
			month = 31
		} else if (month == 3 || month == 5 || month == 8 || month == 10) {
			month = 30
		} else {
			if (year == 2020 || year == 2024 || year == 2028 || year == 2032 || year == 2036 || year == 2040 || year == 2044 || year == 2048) {
				month = 29
			} else {
				month = 28
			}
		}

		function leadZero(i) {
			if (i < 10) {
				i = '0' + i
			}
			return i
		}

		let date = new Date()

		let days = leadZero(month - date.getDate())
		let daysLabel = 'days'
		if (days == '01') {
			daysLabel = 'day'
		}

		let hours = leadZero(23 - date.getHours())
		let hoursLabel = 'hours'
		if (hours == '01') {
			hoursLabel = 'hour'
		}

		let minutes = leadZero(59 - date.getMinutes())
		let minutesLabel = 'minutes'
		if (minutes == '01') {
			minutesLabel = 'minute'
		}

		let seconds = leadZero(59 - date.getSeconds())
		let secondsLabel = 'seconds'
		if (seconds == '01') {
			secondsLabel = 'second'
		}

		let timer = `<h2>${monthName} ends in</h2> <h3>${days} ${daysLabel} : ${hours} ${hoursLabel} : ${minutes} ${minutesLabel} : ${seconds} ${secondsLabel}</h3>`
		$('#timer').html(timer)
	}, 1000)
})
