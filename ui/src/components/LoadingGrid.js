import React from 'react';
import { Item, Items } from '../styles/Grids';

const LoadingGrid = ({ count }) => {
    return (
        <Items>
            {Array.from({ length: count }, (_, index) => (
                <Item>
                    <p>
                        <span className="mark">Loading...</span>
                        </p>
                    <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
                        className="loading" width="500" height="400" alt="Loading" />
                </Item>
            ))}
        </Items>
    );
};

export default LoadingGrid;
