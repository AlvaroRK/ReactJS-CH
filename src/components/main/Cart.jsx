import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items, removeItem, clearItems, totalPrice } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="carritoVacio">
        <div className="vacioContainer">
          <h1>el carrito esta vacío</h1>
          <Link className="a" to="/">Hacer compras</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <div className="cart">
        {items.map((item) => (
          <div className="cartItem" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="item">
              <tr>
                Nombre:<td>{item.name}</td>
              </tr>
              <tr>
                Cantidad:<td>{item.qty}</td>
              </tr>
              <tr>
                Precio:<td>{item.price}</td>
              </tr>
              <tr>
                Subtotal:<td>{item.price * item.qty}</td>
              </tr>
            </div>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
          </div>
        ))}

        <div className="clearCart">
          <h1>Total price: {totalPrice()}</h1>
          <button
            onClick={() => {
              clearItems();
            }}
          >
            Empty cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
