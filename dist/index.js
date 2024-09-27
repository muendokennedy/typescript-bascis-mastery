"use strict";
const menu = [
    { name: 'Margherita', price: 8 },
    { name: 'Pepperoni', price: 10 },
    { name: 'Hawaiian', price: 10 },
    { name: 'Veggie', price: 9 }
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the current menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id = orderId);
    if (!order) {
        console.error(`${orderId} does not exist`);
        return;
    }
    order.status = 'completed';
    return order;
}
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 8 });
placeOrder('Chicken Bacon Ranch');
completeOrder(1);
console.log("Menu: ", menu);
console.log("cashInRegister: ", cashInRegister);
console.log("order queue: ", orderQueue);
