export function processShoppingList(list) {
	// Tu código aquí 👈
	for (const item of list) {
	  if (item.name.includes('oferta')) {
		item.price *= 0.8
	  }
	  item.price *= item.quantity
	  delete item.quantity
	}
  
	return list.reduce((acc, item) => acc + item.price, 0)
  }
  