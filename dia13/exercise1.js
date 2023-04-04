export function groupProducts(products, category) {
	// Tu código aquí
	const filteredProducts = products.filter(product => product.category === category)
	const productText = filteredProducts.map(product => product.name).join(', ')
	const totalPrice = filteredProducts.reduce((acc, product) => acc + product.price, 0)
	return {
	  products: productText,
	  totalPrice
	}
  }
  