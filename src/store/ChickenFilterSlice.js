import { createSlice } from "@reduxjs/toolkit";
import {Chicken_Data} from './MockData/Chicken/Chicken_Data'

export const hamburgfilterSlice=createSlice({
    name: 'chickenfilter',
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
export const { setKeyword } = hamburgfilterSlice.actions;

// 导出 selector（用于获取过滤后的数据）
export const selectFilteredMeals = (state) => {
  const { keyword } = state.chickenfilter;
  if (!keyword) {
    return Chicken_Data; // 如果没有关键字，返回原所有数据
  }
    else return (Chicken_Data.filter(items=>items.title.indexOf(keyword) !==-1))
};

// 导出 reducer
export const {reducer:chickenfilterReducer} = hamburgfilterSlice;