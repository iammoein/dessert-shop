import { useState } from "react";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import DATA from "../DATA.js";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevDessert) => {
      const updateItems = [...prevDessert.items];

      const existingCartItemIndex = updateItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updateItems[existingCartItemIndex];

      if (existingCartItem) {
        const updateItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updateItems[existingCartItemIndex] = updateItem;
      } else {
        const product = DATA.find((product) => product.id === id);
        updateItems.push({
          id: id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        items: updateItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(prouductId, amount) {
    setShoppingCart((prevDessert) => {
      const updateItems = [...prevDessert.items];
      const updateItemIndex = updateItems.findIndex(
        (item) => item.id === prouductId
      );

      const updateItem = {
        ...updateItems[updateItemIndex],
      };

      updateItem.quantity += amount;

      if (updateItem.quantity <= 0) {
        updateItems.splice(updateItemIndex, 1);
      } else {
        updateItems[updateItemIndex] = updateItem;
      }

      return {
        items: updateItems,
      };
    });
  }

  function handleDeleteItem(prouductId) {
    setShoppingCart((prevDessert) => {
      const updateItems = prevDessert.items.filter(
        (item) => item.id !== prouductId
      );

      return {
        items: updateItems,
      };
    });
  }


  return (
    <main className="flex lg:flex-row flex-col items-center justify-center p-6">
      <Desserts
        onAddItemToCart={handleAddItemToCart}
       
        itemQuantity={shoppingCart.items.quantity}
      />
      <Cart items={shoppingCart.items} onDelete={handleDeleteItem}  onUpdateCart={handleUpdateCartItemQuantity} />
    </main>
  );
}

export default App;
