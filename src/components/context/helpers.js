export const updateCartItems = (items, itemToAdd) => {
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);

  if (!!existingCartItem) {
    existingCartItem.quantity++;
    return [...items];
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};
