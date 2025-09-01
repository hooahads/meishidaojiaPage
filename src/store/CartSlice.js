import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount: 0,    // 商品总数量
        totalPrice: 0 
    },
    reducers:{
        addItem:(state,action)=>{
           const meal=action.payload
           const existingItemIndex = state.items.findIndex(item => item.id === meal.id);

        if (existingItemIndex >= 0) {
        // 商品已存在，增加数量
            state.items[existingItemIndex].amount += 1;
        } else {
            // 新商品，添加到购物车并初始化 amount
            state.items.push({ ...meal, amount: 1 });
        }

        state.totalAmount += 1;
        state.totalPrice += meal.price;
            },

        
        // 移除商品（减少数量）
        removeItem: (state, action) => {
        const meal = action.payload;
        const existingItemIndex = state.items.findIndex(item => item.id === meal.id);

        if (existingItemIndex >= 0) {
            if (state.items[existingItemIndex].amount > 1) {
            // 数量 > 1，则只减数量
            state.items[existingItemIndex].amount -= 1;
            state.totalAmount -= 1;
            state.totalPrice -= meal.price;
            } else {
            // 数量 === 1，则移除整个商品
            state.items.splice(existingItemIndex, 1);
            state.totalAmount -= 1;
            state.totalPrice -= meal.price;
            }
        }
        },

        // 清空购物车
        clearCart: (state) => {
        state.items.forEach(item => {
            delete item.amount; // 可选，如果后端不需要 amount 字段
        });
        state.items = [];
        state.totalAmount = 0;
        state.totalPrice = 0;
        }
    }

})

export const {addItem,removeItem,clearCart} =cartSlice.actions;

export const {reducer:cartReducer} = cartSlice;