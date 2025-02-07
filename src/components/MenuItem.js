import React from 'react';
import './MenuItem.css';

// this is where the actual menuitem upload takes place
const MenuItem = ({ title, description, imageName, price }) => {

    return (
        <div className="menuItem">
            <img className="image" src={`/images/${imageName}`} alt={title} />
            <div className="details">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <div className="price-button-container">
                    <p className="price">${price}</p>
                    <button className="add">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
