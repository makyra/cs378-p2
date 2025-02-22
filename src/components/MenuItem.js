import React from 'react';
import './MenuItem.css';

// this is where the actual menuitem upload takes place
const MenuItem = ({ title, description, imageName, price, count, updateCount }) => {
    return (
        <div className="menuItem">
            <img className="image" src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} />
            <div className="details">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <div className="price-button-container">
                    <p className="price">${price}</p>
                    <button className="quantity-button" onClick={() => updateCount(count > 0 ? count - 1 : 0)}>-</button>
                    <span className="count-display">{count}</span>
                    <button className="quantity-button" onClick={() => updateCount(count + 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
