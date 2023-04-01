export function sendEmail(email, subject, body) {
	// Tu código aquí 👈
	return new Promise((resolve, reject) => {
	  if (!email || !subject || !body) {
		reject(new Error("falta un dato"))
	  }
	  window.setTimeout(() => {
		resolve({
		  email,
		  subject,
		  body
		})
	  }, 2000)
	})
  }
  