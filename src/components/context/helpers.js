export const addCartItem = (items, itemToAdd) => {
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);

  if (!!existingCartItem) {
    existingCartItem.quantity++;
    return [...items];
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const removeCartItem = (items, itemToRemove) => {
  if (itemToRemove.quantity < 2) {
    return removeProduct(items, itemToRemove);
  }
  return items.map((item) => {
    if (item.id === itemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};

export const removeProduct = (items, itemToRemove) =>
  items.filter((item) => item.id !== itemToRemove.id);
