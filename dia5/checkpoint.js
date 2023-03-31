export function findLargestPalindrome(words) {
	// Tu código aquí 👈
	let largestPalindrome = null
	for (const word of words) {
	  const reverseWord = word.split("").reverse().join("")
	  if (word === reverseWord && (word.length > largestPalindrome?.length || !largestPalindrome)) {
		largestPalindrome = word
	  }
	}
	return largestPalindrome
  }
  