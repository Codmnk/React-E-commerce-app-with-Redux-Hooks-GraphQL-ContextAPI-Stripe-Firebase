import { createSelector } from "reselect";

//Input selector
const selectCart = state => state.cart;

// Output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuentity, cartItem) =>
        accumalatedQuentity + cartItem.quantity,
      0
    )
);
