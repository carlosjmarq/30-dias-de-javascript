export class Pay {
	constructor() { }
  
	makePay(amount) {
	  return {
		realized: true,
		quantity: amount
	  }
	}
  }

export class Cash extends Pay {
  constructor() {
    super()
  }
}

export class PayPal extends Pay {
	constructor(email) {
	  super()
	  this.email = email
	}
  
	makePay(amount) {
	  const response = super.makePay(amount)
	  return {
		...response,
		platform: 'PayPal',
		email: this.email
	  }
	}
  }

export class Card extends Pay {
	constructor(cardNumber) {
	  super()
	  if (cardNumber.length < 16) {
		throw new Error('Numero de tarjeta invalido')
	  }
	  this.cardNumber = cardNumber
	}
  
	makePay(amount) {
	  const response = super.makePay(amount)
	  return {
		...response,
		lastCardNumbers: this.cardNumber.slice(-4)
	  }
	}
}


function processPay(method, quantity) {
	return method.makePay(quantity)
}