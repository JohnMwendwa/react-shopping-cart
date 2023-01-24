import { useShoppingCartContext } from "../context/shoppingCartContext";
import products from "../data/store-data.json";
import { formatCurrency } from "../utils/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCartContext();
  const item = products.find((product) => product.id === id);
  if (item == null) return null;

  return (
    <div className="flex justify-between items-center w-full  px-1 py-3 ">
      <div className="flex items-center">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="rounded object-cover w-[125px] h-[75px]"
        />

        <div className="ml-3">
          <div>
            <span className="font-medium text-xl">{item.name}</span>
            {quantity > 1 && <span className="text-xs"> x {quantity}</span>}
          </div>
          <div className="text-sm">{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end ml-2 md:flex-row md:items-center">
        <span> {formatCurrency(item.price * quantity)}</span>
        <button
          onClick={() => removeFromCart(id)}
          className="border border-gray-300 text-red-500 font-extrabold px-2 py-1 rounded-md ml-2"
          title="remove item from cart"
          aria-label="remove item from cart"
        >
          &#10761;
        </button>
      </div>
    </div>
  );
}
