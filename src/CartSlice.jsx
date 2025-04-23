import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      console.log(`Adding ${name} to cart`);
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
        console.log(`Incremented ${name}`);
      } else {
        state.items.push({ name, image, cost, quantity: 1})
        console.log(`${name} added to cart`);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      console.log(`Removed ${action.payload}`);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      console.log(`Updating quantity of ${name} to ${quantity}`);
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate && quantity >= 1) {
        itemToUpdate.quantity = quantity;
        console.log(`${name} updated`);
      } else if (itemToUpdate && quantity <= 0) {
        state.items = state.items.filter(item => item.name !== name);
        console.log(`${name} removed`);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
