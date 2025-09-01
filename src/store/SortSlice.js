
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { ShowFilter_Data } from './MockData/ShowFilter/ShowFilter';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    activeSortType: null, 
  },
  reducers: {
    setActiveSortType: (state, action) => {
      state.activeSortType = action.payload;
    },
  },
});

// 根据当前排序类型返回排序后的数据
export const selectFilteredMeals = createSelector(
  state => state.sort.activeSortType,
  () => ShowFilter_Data,
  (activeSortType, dataSource) => {
    let data = [...dataSource];

    if (!activeSortType) return data;

    if (activeSortType === 'LIKE') {
      data.sort((a, b) => b.like - a.like);
    } else if (activeSortType === 'SELL') {
      data.sort((a, b) => b.sell - a.sell);
    } else if (activeSortType === 'LOWPRICE') {
      data.sort((a, b) => a.price - b.price);
    } else if (activeSortType === 'HIGH_PRICE') {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }
);

// Action 导出
export const { setActiveSortType } = sortSlice.actions;

// Reducer 导出
export const { reducer: sortReducer } = sortSlice;

