import { createSlice } from "@reduxjs/toolkit";
import { HomeFilterMeals_Data } from "./MockData/HomeFilterMeals/HomeFilterMeals";

export const filterSlice=createSlice({
    name: 'filter',
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
export const { setKeyword } = filterSlice.actions;

// 导出 selector（用于获取过滤后的数据）
export const selectFilteredMeals = (state) => {
  const { keyword } = state.filter;
  if (!keyword) {
    return []; // 如果没有关键字，返回一个空数组
  }
//   return Delicacies_Data.filter((item) =>
//     item.title.toLowerCase().includes(keyword.toLowerCase())
    else return (HomeFilterMeals_Data.filter(items=>items.title.indexOf(keyword) !==-1))
};

// 导出 reducer
export const {reducer:filterReducer} = filterSlice;