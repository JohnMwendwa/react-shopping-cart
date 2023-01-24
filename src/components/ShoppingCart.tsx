import { useShoppingCartContext } from "../context/shoppingCartContext";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const { cartItems, closeCart } = useShoppingCartContext();
  return (
    <div>
      <button onClick={closeCart}> &#10761;</button>
      <h1> Shopping Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
