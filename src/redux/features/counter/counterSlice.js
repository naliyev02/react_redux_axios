import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
	name: "counter",
	initialState:  {
        counter: 0,
    },
	reducers: {
		decrement: (state) => {
			state.counter -= 1;
		},

		increment: (state) => {
			state.counter += 1;
		},

		incrementCustom: (state, action) => {
			state.counter += action.payload;
		},
	},
});

export const {decrement,increment,incrementCustom} = counterSlice.actions

export default counterSlice.reducer
