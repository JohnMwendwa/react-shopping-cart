import { useShoppingCartContext } from "../context/shoppingCartContext";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const { cartItems, closeCart } = useShoppingCartContext();
  return (
    <div className="absolute min-h-screen w-full max-w-md top-0 right-0 bg-gray-100 px-4 py-3">
      <div className="relative mb-2">
        <h1 className="text-center font-bold text-2xl underline">
          {" "}
          Shopping Cart
        </h1>
        <button
          onClick={closeCart}
          className="absolute top-0 right-0 border-2 text-red-500 font-extrabold px-2  text-lg rounded-md"
        >
          {" "}
          &#10761;
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
