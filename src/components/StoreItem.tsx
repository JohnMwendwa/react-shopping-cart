import { useShoppingCartContext } from "../context/shoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();
  const quantity = getItemQuantity(id);

  return (
    <div className="w-max-[300px] h-full border rounded-md">
      <img
        src={imgUrl}
        alt={name}
        className="rounded-t-md h-[200px] object-cover w-full"
      />
      <div className="flex flex-col  px-6 py-4 gap-4">
        <div className="flex justify-between align-baseline">
          <span className="font-bold text-lg ">{name}</span>
          <span className="font-medium text-md text-gray-500">
            {formatCurrency(price)}
          </span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="w-full rounded-sm bg-blue-700 text-white py-1"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex items-center flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <button
                  className="flex justify-center items-center bg-blue-700 w-7 h-7 rounded-md text-white"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <div>
                  <span className="text-lg font-medium">{quantity}</span> in
                  cart
                </div>
                <button
                  className="flex  justify-center items-center bg-blue-700 w-7 h-7 rounded-md text-white"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-600 rounded-md px-2 py-1 text-white"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
