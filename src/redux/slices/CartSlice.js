import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name : "cart",
    initialState : {
        carts : []
    },
    reducers : {
        add : (state,action)=>{
            state.carts.push(action.payload);
        },
        remove : (state,action)=> {
            state.carts = state.carts.filter((item)=>item.id!==action.payload);
        }
    }
});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;

