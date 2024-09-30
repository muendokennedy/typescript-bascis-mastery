type Pizza = {
  id: number,
  name: string,
  price: number
}

type Order = {
  id: number,
  pizza: Pizza,
  status: 'ordered' | 'completed'
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueue: Order[] = []

const menu = [
  {id: nextPizzaId++, name: 'Margherita', price: 8},
  {id: nextPizzaId++, name: 'Pepperoni', price: 10},
  {id: nextPizzaId++, name: 'Hawaiian', price: 10},
  {id: nextPizzaId++, name: 'Veggie', price: 9}
]

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza)
  return newPizza
}

function placeOrder(pizzaName: string): Order | undefined{
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if(!selectedPizza){
    console.error(`${pizzaName} does not exist in the current menu`)
    return
  }
  cashInRegister += selectedPizza.price
  const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered'}
  orderQueue.push(newOrder)
  return newOrder
}

function completeOrder(orderId: number){
  const order = orderQueue.find(order => order.id = orderId)
  if(!order){
    console.error(`${orderId} does not exist`)
    return
  }
  order.status = 'completed'
  return order
}

function getPizzaDetail(identifier: string | number): Pizza | undefined{
  if(typeof identifier === 'string'){
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } else if(typeof identifier === 'number') {
    return menu.find(pizza => pizza.id === identifier)
  } else {
    throw new TypeError('Parameter `identifier` must be either a string or a number')
  }
}

function addToArray<T>(array: T[], item: T): T[]{
  array.push(item)
  return array
}

addNewPizza({name: 'Chicken Bacon Ranch', price: 12})
addNewPizza({name: 'BBQ Chicken', price: 12})
addNewPizza({name: 'Spicy Sausage', price: 8})
console.log("The new pizza is", getPizzaDetail(5))

placeOrder('Chicken Bacon Ranch')
completeOrder(1)

console.log("Menu: ", menu)
console.log("cashInRegister: ", cashInRegister)
console.log("order queue: ", orderQueue)