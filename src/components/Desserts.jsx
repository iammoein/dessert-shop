import DATA from "../../data.js";
import Product from "./Product.jsx";

export default function Desserts({
  onAddItemToCart,
}) {
  return (
    <section className="mx-8">
      <h1 className="my-8 font-bold text-5xl">Desserts</h1>
      <ul className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-3">
        {DATA.map((dessert) => {
          return (
            <li key={dessert.id}>
              <Product
                {...dessert}
                onAddToCart={onAddItemToCart}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
