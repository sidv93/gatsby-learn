import React from 'react';
import { Item, Items } from '../styles/Grids';

const ItemGrid = ({items}) => {
    return (
        <Items>
            {
                items.map(item => (
                    <Item key={item._id}>
                        <p>
                            <span className="mark">{item.name}</span>
                        </p>
                        <img width="500" height="400"
                        src={`${item.image.asset.url}?w=500&h=400&fit=crop`} alt={item.name} 
                        style={{background: `url(${item.image.asset.metadata.lqip})`, backgroundSize: 'cover'}}
                        />
                    </Item>
                ))
            }
        </Items>
    );
};

export default ItemGrid;