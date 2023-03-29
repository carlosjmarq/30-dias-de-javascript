export function isLeapYear(year) {
	// Tu código aquí 👈
	if (year < 0 || year % 1 !== 0) return false
	let isLeapYear = true
	if (year % 4 !== 0 || year % 100 === 0) {
	  if (year % 100 !== 0 || year % 400 !== 0) {
		isLeapYear = false
	  }
	}
	return isLeapYear
  }
  
  