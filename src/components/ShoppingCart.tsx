import { useShoppingCartContext } from "../context/shoppingCartContext";

export default function ShoppingCart() {
  const { cartItems, closeCart } = useShoppingCartContext();
  return (
    <div>
      <button onClick={closeCart}> &#10761;</button>
      <h1> ShoppingCart</h1>
    </div>
  );
}
