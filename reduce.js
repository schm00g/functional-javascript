let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

/*
const totalAmount= orders.reduce(function(sum, order){
    console.log(`Sum & Order: `, sum, order);
    return sum + order.amount
}, 0)
*/

const totalAmount= orders.reduce((sum, order) => sum + order.amount, 0)

console.log(`Sum: `, totalAmount);

/* 
    VIDEO https://youtu.be/1DMolJ2FrNY
*/

