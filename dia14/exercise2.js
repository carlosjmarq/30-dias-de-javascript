export function sortByAvailabilityAndPrice(products) {
	// Tu código aquí 👈
	const availableProducts = products.filter(product => product.inStock)
	const unavailableProducts = products.filter(product => !product.inStock)
	return [
	  ...availableProducts.sort((a, b) => a.price - b.price),
	  ...unavailableProducts.sort((a, b) => a.price - b.price)
	]
  }
  