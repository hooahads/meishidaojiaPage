import { createSlice } from "@reduxjs/toolkit";
import {Drinks_Data} from './MockData/Drinks/Drinks_Data'

export const drinksfilterSlice=createSlice({
    name: 'drinksfilter',
    // 初始化state
    initialState:{
        keyword:'',

    },
    // 修改状态的方法 同步方法 支持直接修改
    reducers:{
        setKeyword:(state,action) => {
            state.keyword=action.payload;
        },
    },
})

// 导出 action
export const { setKeyword } = drinksfilterSlice.actions;

// 导出 selector（用于获取过滤后的数据）
export const selectFilteredMeals = (state) => {
  const { keyword } = state.drinksfilter;
  if (!keyword) {
    return Drinks_Data; // 如果没有关键字，返回原所有数据
  }
    else return (Drinks_Data.filter(items=>items.title.indexOf(keyword) !==-1))
};

// 导出 reducer
export const {reducer:drinksfilterReducer} = drinksfilterSlice;