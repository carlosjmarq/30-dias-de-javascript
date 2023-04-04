export class Car {
	// Tu código aquí 👈
	constructor(brand, model, year, mileage, state = false) {
	  this.brand = brand
	  this.model = model
	  this.year = year
	  this.mileage = mileage
	  this.state = state
	}
  
	turnOn() {
	  this.state = true
	}
  
	turnOff() {
	  this.state = false
	}
  
	drive(kilometers) {
	  if (!this.state) {
		throw new Error('El auto está apagado')
		return
	  }
	  this.mileage += kilometers
	}
  }