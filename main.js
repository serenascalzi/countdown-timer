$(document).ready(function() {
	setInterval(function() {
		function leadZero(i) {
			if (i < 10) {
				i = '0' + i
			}
			return i
		}
		let date = new Date()
		let months = leadZero(11 - date.getMonth()) // Month as # 0 - 11
		let monthsLabel = 'months'
		if (months == '01') {
			monthsLabel = 'month'
		}
		let days = leadZero(31 - date.getDate()) // Day as # 1 - 31
		let daysLabel = 'days'
		if (days == '01') {
			daysLabel = 'day'
		}
		let hours = leadZero(23 - date.getHours()) // Hour as # 0 - 23
		let hoursLabel = 'hours'
		if (hours == '01') {
			hoursLabel = 'hour'
		}
		let minutes = leadZero(59 - date.getMinutes()) // Minute as # 0 - 59
		let minutesLabel = 'minutes'
		if (minutes == '01') {
			minutesLabel = 'minute'
		}
		let seconds = leadZero(59 - date.getSeconds()) // Second as # 0 - 59
		let secondsLabel = 'seconds'
		if (seconds == '01') {
			secondsLabel = 'second'
		}
		let timer = `${months} ${monthsLabel} : ${days} ${daysLabel} : ${hours} ${hoursLabel} : ${minutes} ${minutesLabel} : ${seconds} ${secondsLabel}`
		$('#timer').html(timer)
	}, 1000)
})
