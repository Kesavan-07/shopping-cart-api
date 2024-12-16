import Cart from "./cart";
import LandingPage from "./landingpage";
import { useState } from "react";
import Model from "./model";

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      alert("This item is already added to the cart.");
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex justify-between bg-blue-400 pt-3 pr-12 pb-3 pl-8 items-center">
        <h1>Kaadugal</h1>
        <Cart cartItems={cartItems} setShowModal={setShowModal} />
      </div>
      <LandingPage addToCart={addToCart} />
      {showModal && (
        <Model
          setShowModal={setShowModal}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
};

export default NavBar;
