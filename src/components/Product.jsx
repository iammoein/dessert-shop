import { useEffect, useState } from "react";

import addCart from "../assets/images/icon-add-to-cart.svg";

export default function Product({
  id,
  image,
  category,
  name,
  price,
  onAddToCart,
}) {
  const [isMobile, setIsMobile] = useState(window);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="flex items-center justify-center flex-col">
      <div className="relative mb-4">
        <img
          className="max-w-full overflow-hidden rounded-xl"
          src={isMobile ? image.mobile : image.desktop}
          alt="dessert's image"
        />

        <button
          className="group w-[8rem] flex gap-1 items-center justify-center absolute top-[90%] left-[50%] translate-x-[-50%] bg-white rounded-3xl p-2 border border-primary cursor-pointer hover:bg-primary hover:text-white"
          onClick={() => onAddToCart(id)}
        >
          <img
            className="group-hover:filter group-hover:brightness-0 group-hover:invert"
            src={addCart}
            alt=""
          />
          Add to cart
        </button>
      </div>
      <div className="mt-4 self-start">
        <small>{category}</small>
        <h3 className="font-semibold">{name}</h3>
        <h4 className="font-semibold text-primary">${price}</h4>
      </div>
    </article>
  );
}
