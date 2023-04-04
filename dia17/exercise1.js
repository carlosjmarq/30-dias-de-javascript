export function arrayModified() {
	// Tu código aquí 👈
	Array.prototype.myFilter = function (evalFunction) {
	  const newArray = []
	  for (const item of this) {
		if (evalFunction(item)) {
		  newArray.push(item)
		}
	  }
	  return newArray
	}
  }
  