export function validateForm(formData, registeredUsers) {
	// Tú código aquí 👈
	const { name, lastname, email, password } = formData
	if (!name || !lastname || !email || !password) {
	  throw new Error(`Faltan los siguientes campos: ${!name && 'name'} $${!lastname && 'lastname'} ${!email && 'email'} ${!password && 'password'}`);
	  return
	}
  
	const usedUser = registeredUsers.find(user => user.email === email)
	if (usedUser) {
	  throw new Error("Este correo ya esta en uso");
	}
  
	registeredUsers.push({
	  name,
	  lastname,
	  email
	})
  
	return `Tu registro fue exitoso ${name} ${lastname}`
  
  }