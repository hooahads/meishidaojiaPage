
import classes from './HomeFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSortType } from '../../../store/SortSlice';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"

export default function HomeFilter() {
  const activeSortType = useSelector((state) => state.sort.activeSortType);
  const dispatch = useDispatch();

  // 定义所有排序选项
  const sortOptions = [
    { key: 'LIKE', label: '点评高分', sortType: 'LIKE' },
    { key: 'SELL', label: '销量最高', sortType: 'SELL' },
    { key: 'LOWPRICE', label: '价格最低', sortType: 'LOWPRICE' },
    { key: 'HIGH_PRICE', label: '价格最高', sortType: 'HIGH_PRICE' },
  ];

  // 点击排序按钮：如果当前已激活，则取消；否则激活
  const handleSortClick = (option) => {
    if (activeSortType === option.sortType) {
      // 当前已选中 → 取消排序
      dispatch(setActiveSortType(null));
    } else {
      // 切换到新的排序类型
      dispatch(setActiveSortType(option.sortType));
    }
  };



  return (
    <div className={classes.Filter}>
      <span className={classes.Suggest}><FontAwesomeIcon icon={faFire}/>推荐</span>
      {sortOptions.map((option) => (
        <div key={option.key} className={classes.Filter_btns}>
          <button
            className={`${classes.Btn} ${activeSortType === option.sortType ? classes.Active : ''}`}
            onClick={() => handleSortClick(option)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
}