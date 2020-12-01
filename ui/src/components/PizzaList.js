import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PizzaContainer = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

const Pizza = ({ pizza }) => (
  <PizzaContainer>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
    </Link>
    <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
    <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
  </PizzaContainer>
);

const PizzaList = ({ pizzas }) => (
  <PizzaGrid>
    {pizzas.map((pizza) => (
      <Pizza pizza={pizza} key={pizza.id} />
    ))}
  </PizzaGrid>
);

export default PizzaList;
