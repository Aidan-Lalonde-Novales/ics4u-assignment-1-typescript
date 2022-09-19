/**
 * This program runs Rock Paper Scissors
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-09-18
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// input
console.log('Welcome to Rock Paper Scissors!')
const userHandString = prompt('Enter 1 for Rock, 2 for Paper, 3 for Scissors: ')
const userHand = parseInt(userHandString)

// Random number module
const min = 1
const max = 3
const randomHand = Math.floor(Math.random() * max + min)

// process
if (userHand === randomHand) {
  console.log('\nYou tie!')
} else if (
  (userHand === 1 && randomHand === 3) ||
  (userHand === 2 && randomHand === 1) ||
  (userHand === 3 && randomHand === 2)
) {
  console.log('\nYou win!')
} else if (
  (userHand === 1 && randomHand === 2) ||
  (userHand === 2 && randomHand === 3) ||
  (userHand === 3 && randomHand === 1)
) {
  console.log('\nYou lose!')
} else {
  console.log('\nInvalid Input.')
}

// output
if (randomHand === 1) {
  console.log('The opponent chose Rock.')
} else if (randomHand === 2) {
  console.log('The opponent chose Paper.')
} else if (randomHand === 3) {
  console.log('The opponent chose Scissors.')
} else {
  console.log('If you see this, the RNG messed up. Sorry.')
}

console.log('\nDone.')
