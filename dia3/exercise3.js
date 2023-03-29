export function printTriangle(size, character) {
	// Tu código aquí 👈
	let triangle = ''
	const space = ' '
	for (let i = 1; i <= size; i++) {
	  if (i !== 1) {
		triangle += '\n'
	  }
	  triangle += space.repeat(size-i) + character.repeat(i)
	}
	return triangle
  }
  