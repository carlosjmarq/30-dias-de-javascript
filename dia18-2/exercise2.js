export class User {
	constructor (name, age, friends = [], messages = []) {
	  this._name = name
	  this._age = age
	  this._friends = friends
	  this._messages = messages
	}
  
	addFriend(friend) {
	  this._friends.push(friend)
	}
  
	sendMessage(message, friend) {
	  this._messages.push(message)
	  friend._messages.push(message)
	}
  
	showMessages() {
	  return this._messages
	}
  
	get name() {
	  return this._name
	}
  
	get age() {
	  return this._age
	}
  
	set name(newName) {
	  if (newName) {
		this._name = newName
	  }
	}
  
	set age(newAge) {
	  if (newAge > 0) {
		this._age = newAge
	  }
	}
  
  }
  