import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from "./formatMoney";

const attachNamesAndPrices = (order, pizzas) => {
    return order.map(item => {
        const pizza = pizzas.find(pizza => item.id === pizza.id);
        return {
            ...item,
            name: pizza.name,
            thumbnail: pizza.image.asset.fluid.src,
            price: formatMoney(calculatePizzaPrice(pizza.price, item.size))
        }
    })
}

export default attachNamesAndPrices;
