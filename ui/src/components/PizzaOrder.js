import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import formatMoney from '../utils/formatMoney';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => (
  <>
    {order.map((singleorder, index) => {
      const pizza = pizzas.find((item) => item.id === singleorder.id);
      return (
        <MenuItemStyles key={singleorder.id}>
          <Img fluid={pizza.image.asset.fluid} />
          <h2>{pizza.name}</h2>
          <p>
            {formatMoney(calculatePizzaPrice(pizza.price, singleorder.size))}
            <button
              type="button"
              className="remove"
              title={`Remove ${singleorder.size} ${pizza.name} from order`}
              onClick={() => removeFromOrder(index)}
            >
              &times;
            </button>
          </p>
        </MenuItemStyles>
      );
    })}
  </>
);

export default PizzaOrder;
