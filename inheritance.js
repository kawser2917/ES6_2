class Vichle{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    move(){
        console.log("Viche must be moved")
    }
}

class Bus extends Vichle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat = seat
        this.ticketPrice = ticketPrice
    }
}

const b = new Bus("volbo",5000000, 10,400)
console.log(b)