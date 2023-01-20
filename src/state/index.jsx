// This is where redux is used to monitor state in the whole application
import { createSlice } from '@reduxjs/toolkit';


// getting the value of the current state. This are the states you can store and also access anywhere in the application
const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
};

// This is where the intial state and other values are passed 
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // This helps to store and change i.e. update the value of the state
        setItems: (state, action) => {
            // redux toolkit helps to mutate state
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count++;
                }

                return item;
            });
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });
        },

        setIsCartOpen: (state) => {
            // this changes isCartOpen value to true and false 
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;