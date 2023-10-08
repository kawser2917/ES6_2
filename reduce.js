const numbers = [2,4,6,8,10,12]
const result = numbers.reduce( (x,y)=>{
    console.log(`The addition is ${y} and the element is ${x}`)
    return x+y
},0 )

console.log(result)


