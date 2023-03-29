export function findFamousCats(cats) {
	// Tu código aquí 👈
	const catFollowers = cats.reduce((acc, cat) => {
	  const totalFollowers = cat.followers.reduce((acc, num) => acc + num)
	  acc.push(totalFollowers)
	  return acc
	}, [])
  
	const maxFollwers = Math.max(...catFollowers)
	return cats.filter(cat => {
	  const totalFollowers = cat.followers.reduce((acc, num) => acc + num)
	  return totalFollowers === maxFollwers
	}).map(cat => cat.name)
  }
  