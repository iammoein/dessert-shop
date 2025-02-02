import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import removeIcon from "../assets/images/icon-remove-item.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";

export default function Cart({ items, onDelete, onUpdateCart }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalLength = items.reduce((acc, item) => acc + item.quantity, 0);

  const formattedTotalPrice = `${totalPrice.toFixed(2)}`;

  const classes = "font-bold text-primary text-2xl self-start";

  return (
    <div className="m-8 px-6 py-8 bg-white rounded-lg w-full lg:w-[35rem] lg:self-start">
      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className={classes}>Your Cart(0)</h2>
          <img src={emptyCartImg} alt="cart is empty" />
          <p>You added items will appear here</p>
        </div>
      )}

      {items.length > 0 && (
        <div>
          <h2 className={classes}>Your Cart ({totalLength})</h2>
          <ul className="flex flex-col my-4 gap-8 mb-8">
            {items.map((item) => {
              const classes =
                "bg-primary rounded-full w-6 h-6 bg-transparent flex items-center justify-center active:scale-110";

              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b-2 pb-6 "
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 ">
                      <button
                        className={classes}
                        onClick={() => onUpdateCart(item.id, -1)}
                      >
                        <img src={decrementIcon} alt="decrement icon" />
                      </button>
                      <h4 className="font-semibold ">{item.name}</h4>
                      <button
                        className={classes}
                        onClick={() => onUpdateCart(item.id, +1)}
                      >
                        <img src={incrementIcon} alt="increment icon" />
                      </button>
                    </div>
                    <div className="flex gap-2 items-center ml-1 mt-4">
                      <small className="font-semibold text-primary text-[0.9rem]">
                        {item.quantity}x
                      </small>
                      <small className="text-[#ad8984]">@${item.price}</small>
                      <small className="text-[#866259] font-semibold text-[0.9rem]">
                        ${item.price * item.quantity}
                      </small>
                    </div>
                  </div>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="hover:transform hover:scale-105 bg-transparent"
                  >
                    <img
                      className="border border-[#ad8984] p-1 rounded-full"
                      src={removeIcon}
                      alt=""
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex justify-between items-center">
            <p className="text-lg">Order Total</p>
            <strong className="text-3xl">${formattedTotalPrice}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
