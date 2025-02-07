import React from 'react';
import './MenuHeader.css';

const MenuHeader = ({ name, logo, phrase }) => {

  return (
      <div className="menuHeader">
          <div className="menu-header">
            <div className="logo-container">
              <img className="logo" src={logo} />
            </div>
            <h1 className="phrase">{phrase}</h1>
            <header className="name">{name}</header>
        </div>
      </div>
  );
};

export default MenuHeader;