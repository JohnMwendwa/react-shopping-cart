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
    <div className="flex justify-between items-center w-full border-2 px-4 py-3">
      <div className="flex items-center">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="rounded-md object-cover w-[125px] h-[75px]"
        />

        <div className="ml-3">
          <div>
            <span className="font-medium text-xl">{item.name}</span>
            {quantity > 1 && <span> x {quantity}</span>}
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div>
        {formatCurrency(item.price * quantity)}
        <button
          onClick={() => removeFromCart(id)}
          className="border text-red-500 font-extrabold px-2 py-1 rounded-md ml-2"
        >
          &#10761;
        </button>
      </div>
    </div>
  );
}
