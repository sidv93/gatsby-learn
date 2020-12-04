import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BeerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SingleBeer = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

const Beers = ({ data }) => (
  <>
    <h2 className="center">
      We have ${data.beers.nodes.length} beers available. Dine in only!
    </h2>
    <BeerGrid>
      {data.beers.nodes.map((beer) => {
        const rating = Math.round(beer.rating.average);
        return (
          <SingleBeer key={beer.id}>
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            {beer.price}
            <p title={`${rating} out of 5 stars`}>
              {`🌟 `.repeat(rating)}
              <span style={{ filter: 'grayscale(100%)' }}>
                {`🌟 `.repeat(5 - rating)}
              </span>
              <span>({beer.rating.reviews})</span>
            </p>
          </SingleBeer>
        );
      })}
    </BeerGrid>
  </>
);

export default Beers;

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
