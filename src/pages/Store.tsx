import StoreItem from "../components/StoreItem";
import Products from "../data/store-data.json";

export default function Store() {
  return (
    <div className="w-max-7xl pt-3 px-4 lg:px-8">
      <h1 className="text-center font-bold text-3xl mb-4">Store</h1>

      <div className="grid grd-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {Products.map((product) => (
          <StoreItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
