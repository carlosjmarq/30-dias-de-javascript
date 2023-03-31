export function myMap(array, func) {
	// Tu código aquí 👈
	const newArray = []
	for (const element of array) {
	  newArray.push(func(element))
	}
	return newArray
  }
  