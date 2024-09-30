"use strict";
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue = [];
const menu = [
    { id: nextPizzaId++, name: 'Margherita', price: 8 },
    { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
    { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
    { id: nextPizzaId++, name: 'Veggie', price: 9 }
];
function addNewPizza(pizzaObj) {
    pizzaObj.id = nextOrderId++;
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
function getPizzaDetail(identifier) {
    if (typeof identifier === 'string') {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === 'number') {
        return menu.find(pizza => pizza.id === identifier);
    }
    else {
        throw new TypeError('Parameter `identifier` must be either a string or a number');
    }
}
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 8 });
console.log("The new pizza is", getPizzaDetail(5));
placeOrder('Chicken Bacon Ranch');
completeOrder(1);
console.log("Menu: ", menu);
console.log("cashInRegister: ", cashInRegister);
console.log("order queue: ", orderQueue);
