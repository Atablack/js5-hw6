import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'prodList',
    initialState: { 
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({
              product: action.payload,
              count: 1
            });
          },
    }
})

export const {addToCart } = productSlice.actions
export default productSlice.reducer