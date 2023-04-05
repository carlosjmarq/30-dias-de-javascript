class Reservation {
	constructor(flight, passenger) {
	  this.flight = flight
	  this.passenger = passenger
	}
  
	reservationDetails() {
	  const { origin, destination, date } = this.flight
	  const { name, lastName } = this.passenger
	  return {
		origin,
		destination,
		date,
		reservedBy: `${name} ${lastName}`
	  }
	}
  }

  class Passenger {
	constructor(name, lastName, age) {
	  this.name = name
	  this.lastName = lastName
	  this.age = age
	  this.flights = []
	}
  }

  class Flight {
	constructor(origin, destination, date, capacity, price) {
	  this.origin = origin
	  this.destination = destination
	  this.date = date
	  this.capacity = capacity
	  this.price = price
	  this.passengers = []
	}
  
	sellTicket(passenger) {
	  if (this.capacity <= 0) {
		return 
	  }
	  this.capacity -= 1
	  const { origin, destination, date, price } = this
	  passenger.flights.push({
		origin,
		destination,
		date,
		price
	  })
	  const { name, lastName, age } = passenger
	  this.passengers = [...this.passengers, {
		age: age,
		fullName: `${name} ${lastName}`
	  }]
	  return new Reservation({...this}, passenger)
	}
  }


  class PremiumFlight extends Flight {
	constructor(origin, destination, date, capacity, price, specialService) {
	  super(origin, destination, date, capacity, price)
	  this.price += specialService
	}
}

class EconomicFlight extends Flight {
	sellTicket(passenger) {
	  if (capacity <= 0) {
		return
	  }
	  this.capacity -= 1
	  const { origin, destination, date, price } = this
	  const applyDiscount = passenger.age < 18 || passenger.age > 65
	  passenger.flights.push({
		origin,
		destination,
		date,
		price: applyDiscount ? price * 0.8 : price
	  })
	  this.price = applyDiscount ? price * 0.8 : price
	  const { name, lastName, age } = passenger
	  this.passengers = [...this.passengers, {
		age: age,
		fullName: `${name} ${lastName}`
	  }]
	  return new Reservation({...this}, passenger)
	}
  }