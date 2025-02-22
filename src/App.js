import './App.css';
import { useState } from 'react';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  const [cart, setCart] = useState({});

  const updateItemCount = (id, count) => {
    setCart(prevCart => ({
      ...prevCart,    // for spreading cart and maintaining existing counts
      [id]: Math.max(0, count)
    }));
  };

  // reduce iterates over the menuItems and sums up the total price
  const subtotal = menuItems.reduce((total, item) => {
    return total + (cart[item.id] ?? 0) * item.price;
  }, 0);

  const clearCart = () => setCart({});

  const placeOrder = () => {
    const orders = menuItems
    .filter(item => cart[item.id] > 0)
    .map(item => `${cart[item.id]} ${item.title}`)
    .join(" & ");

    if (!orders) {
      alert("No items in cart. Please place order!");
    } else {
      alert(`Order placed!\n\n${orders}\nTotal: ${subtotal.toFixed(2)}`);
    }
  }

  return (
    <div className="body">
      <div className="menu">
        <MenuHeader
          name = "Raku Menus"
          logo = "/images/logo.png"
          phrase = "Breeze of Comfort"
          />
        {/* Display menu items dynamically here by iterating over the provided menuItems */}
        {menuItems.map((item) => (
          <MenuItem 
            key = {item.id}
            title = {item.title}
            description = {item.description}
            price = {item.price}
            imageName = {item.imageName}
            count = {cart[item.id] || 0}  // this passes count to MenuItem
            updateCount={(count) => updateItemCount(item.id, count)}  // this passes update function
          />
        ))}
      </div>
      <div className="subtotal-container">
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
        <div className="button-group">
          <button onClick={placeOrder}>Order</button>
          <button onClick={clearCart}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
