export function protectDog(dog) {
	// Tu código aquí 👈
	const newDog = Object.assign({}, dog)
	Object.freeze(newDog)
	for (const key in newDog) {
	  if (typeof newDog[key] === 'object') {
		Object.freeze(newDog[key])
	  }
	} 
	return newDog
  }