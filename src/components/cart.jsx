const Cart = ({ cartItems, setShowModal }) => {
  return (
    <div
      className="relative flex items-center gap-2"
      onClick={() => setShowModal(true)}
    >
      <span className="material-symbols-outlined text-3xl cursor-pointer">
        shopping_cart
      </span>
      <span className="text-xl font-bold">{cartItems.length}</span>
    </div>
  );
};

export default Cart;
