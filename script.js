// script.js - Time Clock Enigma Solution

/**
 * Checks if a number is a palindrome
 * Função que verifica se um número é palíndromo
 */
function isPalindrome(number) {
  const str = number.toString()
  return str === str.split('').reverse().join('')
}

/**
 * Finds the smallest palindrome greater than 123456 that's divisible by 11
 * Função que encontra o menor palíndromo maior que 123456 divisível por 11
 */
function findSmallestPalindromeDivisibleBy11() {
  let number = 123457 // Starting from the number right after 123456
  // Começamos do número imediatamente após 123456

  while (true) {
    if (isPalindrome(number) && number % 11 === 0) {
      return number
    }
    number++
  }
}

// Find and display the result
// Encontrar e exibir o resultado
const result = findSmallestPalindromeDivisibleBy11()
console.log('The smallest palindrome greater than 123456 divisible by 11 is:', result)
console.log('O menor palíndromo maior que 123456 divisível por 11 é:', result)
