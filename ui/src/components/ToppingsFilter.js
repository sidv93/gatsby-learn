import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Topping = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    border-radius: 2px;
    background: var(--grey);
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);

    .count {
      background: white;
      padding: 2px 5px;
    }

    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

const countPizzasOnToppings = (pizzas) => {
  const countedToppings = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedToppings = Object.values(countedToppings).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
};

const ToppingsFilter = ({ activeTopping }) => {
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            id
            name
          }
        }
      }
    }
  `);
  const toppingsWithCount = countPizzasOnToppings(pizzas.nodes);

  return (
    <Topping>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCount.map((topping) => (
        <Link
          to={`/topping/${topping.name}`}
          key={topping.id}
          className={topping.name === activeTopping ? 'active' : ''}
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </Topping>
  );
};

export default ToppingsFilter;
