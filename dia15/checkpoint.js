export function hotelSystem(rooms) {
	// Tu código aquí
  
	let reservations = []
	const hotelRooms = [...Array(rooms).keys()].map(i => i + 1)
  
	const isBetween = (checkIn, checkOut, comparationDate) => {
	  const [checkInMonth, checkInDay] = checkIn.split("/").map(i => parseInt(i))
	  const [checkOutMonth, checkOutDay] = checkOut.split("/").map(i => parseInt(i))
	  const [comparationMonth, comparationDay] = comparationDate.split("/").map(i => parseInt(i))
  
	  if (comparationMonth > checkInMonth && comparationDate < checkOutMonth) {
		return true
	  }
  
	  if (comparationMonth === checkInMonth && comparationDay >= checkInDay) {
		return true
	  }
  
	  if (comparationMonth === checkOutMonth && comparationDay <= checkOutDay) {
		return true
	  }
  
	  return false
	}
  
	const searchReservation = (id) => {
	  const selectedReservation = reservations.find(reservation => reservation.id === id)
	  if (!selectedReservation) {
		throw new Error("La reservación que se busca no existe")
	  }
	  return selectedReservation
	}
  
	const getSortReservations = () => {
	  return [...reservations].sort((a, b) => {
		const [monthA, dayA] = a.checkIn.split("/")
		const [monthB, dayB] = b.checkIn.split("/")
		if (parseInt(monthA) > parseInt(monthB)) {
		  return 1
		}
		if (parseInt(monthA) === parseInt(monthB)) {
		  return parseInt(dayA) > parseInt(dayB) ? 1 : -1
		}
		return -1
	  })
	}
  
	const addReservation = (reservation) => {
	  const sameRoomReservations = [...reservations].filter(res => res.roomNumber === reservation.roomNumber)
	  let available = true
	  for (const reser of sameRoomReservations) {
		if (isBetween(reser.checkIn, reser.checkOut, reservation.checkIn) || isBetween(reser.checkIn, reser.checkOut, reservation.checkOut)) {
		  available = false
		}
	  }
	  if (!available) {
		throw new Error("La habitación no está disponible")
	  }
	  reservations.push(reservation)
	  return "Reservación registrada exitosamente"
	}
  
	const removeReservation = (id) => {
	  const reservationToRemove = [...reservations].find(reservation => reservation.id === id)
	  if (!reservationToRemove) {
		throw new Error("La reservación que se busca remover no existe")
	  }
	  reservations = [...reservations.filter(reservation => reservation.id !== id)]
	  return reservationToRemove
	}
  
	const getReservations = () => {
	  return [...reservations]
	}
  
	const getAvailableRooms = (checkIn, checkOut) => {
	  const filteredRooms = reservations.filter(reservation => {
		return isBetween(checkIn, checkOut, reservation.checkIn) || isBetween(checkIn, checkOut, reservation.checkOut)
	  })
		.map(reservation => reservation.roomNumber)
  
	  // return filteredRooms
  
	  return [...hotelRooms].filter(number => !filteredRooms.includes(number))
	}
  
	return {
	  searchReservation,
	  getSortReservations,
	  addReservation,
	  removeReservation,
	  getReservations,
	  getAvailableRooms
	}
  }