import { createSlice } from "@reduxjs/toolkit";
import {Hamburg_Data} from './MockData/Hamburg/Hamburg_Data'

export const hamburgfilterSlice=createSlice({
    name: 'hamburgfilter',
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
  const { keyword } = state.hamburgfilter;
  if (!keyword) {
    return Hamburg_Data; // 如果没有关键字，返回原所有数据
  }
    else return (Hamburg_Data.filter(items=>items.title.indexOf(keyword) !==-1))
};

// 导出 reducer
export const {reducer:hamburgfilterReducer} = hamburgfilterSlice;