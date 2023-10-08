const numbers = [2,4,6,8,10]

function doubltIt(num){
    return num*2
}

const result = numbers.map(doubltIt)
const qube = numbers.map(n=>Math.pow(n,3))
const square = numbers.map(n=>n*n)

console.log(result)
console.log(qube)
console.log(square)