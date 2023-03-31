export function createCalculator() {
	// Tu código aquí 👈
	let total = 0
  
	const add = (number) => {
	  total += number
	  return total
	}
  
	const subtract = (number) => {
	  total -= number
	  return total
	}
  
	const multiply = (number) => {
	  total *= number
	  return total
	}
  
	const divide = (number) => {
	  total /= number
	  return total
	}
  
	const clear = () => {
	  total = 0
	  return total
	}
  
	const getTotal = () => {
	  return total
	}
  
	return {
	  add,
	  subtract,
	  multiply,
	  divide,
	  clear,
	  getTotal
	}
  }