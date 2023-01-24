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
    <div className="flex justify-between items-center w-full border-2">
      <div className="flex">
        <img
          src={item.imgUrl}
          alt={item.name}
          width="125px"
          height="75px"
          className="rounded-md object-cover"
        />

        <div>
          <div>
            <span>{item.name}</span>
            {quantity > 1 && <span> x {quantity}</span>}
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div>
        {formatCurrency(item.price * quantity)}
        <button onClick={() => removeFromCart(id)}>&#10761;</button>
      </div>
    </div>
  );
}
