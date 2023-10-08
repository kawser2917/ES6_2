const actor = [
    {
        name: "Shahrukh khan",
        age: 56,
        city: "Dhaka"
    }
]
// accessing value

console.log(actor[0].name)

const product = {
    count: 50001,
    data: [
        {id:1, name:"lenevo", price: 65000},
        {id:2,name: "macbook",price:165000}
    ]
}

console.log(product.data[0].price)

const user = {
    id:5001,
    name: "Kawser Ahmed",
    address : {
        street: {
            first: "13/a",
            second: "Mirpur ar vitor"
        },
        city: "Dhaka",
    }
}
console.log(user.address.street.second)