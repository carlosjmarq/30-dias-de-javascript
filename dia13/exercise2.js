export function searchValue(array, value) {
	// Tu código aquí 👈
	for (const [row, subarray] of array.entries()) {
	  const column = subarray.indexOf(value)
	  if (column !== -1) {
		return {
		  row,
		  column
		}
	  }
	}
	throw new Error("Valor no encontrado");
  }
  