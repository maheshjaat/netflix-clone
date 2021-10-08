import {createSlice} from '@reduxjs/toolkit';
export const userSlice=createSlice({
    name:'user',
    initialState:{
        value:0,
    },
    reducer: {
        increment: state => {
            state.value += 1;
        },
        decrement: state=>{
            state.value-=1;
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        }
    }
})

export const {increment, decrement, incrementByAmount}=counterSlice.actions;