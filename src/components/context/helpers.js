const updateCartItems = (cartItems) => {
  const itemsCounter = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  return { total, itemsCounter, cartItems };
};

export const addCartItem = (items, itemToAdd) => {
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);

  if (!!existingCartItem) {
    existingCartItem.quantity++;
    return updateCartItems([...items]);
  }
  return updateCartItems([...items, { ...itemToAdd, quantity: 1 }]);
};

export const removeCartItem = (items, itemToRemove) => {
  if (itemToRemove.quantity < 2) {
    return removeProduct(items, itemToRemove);
  }
  return updateCartItems(
    items.map((item) => {
      if (item.id === itemToRemove.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
  );
};

export const removeProduct = (items, itemToRemove) =>
  updateCartItems(items.filter((item) => item.id !== itemToRemove.id));

// TODO: Move to proper place
export const createAction = (type, payload) => ({ type, payload });
