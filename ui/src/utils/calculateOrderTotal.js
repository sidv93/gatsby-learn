import calculatePizzaPrice from './calculatePizzaPrice';

const calculateOrderTotal = (order, pizzas) =>
  order.reduce((acc, singleOrder) => {
    const pizza = pizzas.find((item) => item.id === singleOrder.id);
    return (acc += calculatePizzaPrice(pizza.price, singleOrder.size));
  }, 0);

export default calculateOrderTotal;
