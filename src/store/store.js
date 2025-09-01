import {configureStore} from '@reduxjs/toolkit'
// 导入切片
import  {filterReducer}  from './FilterSlice';
import {cartReducer} from './CartSlice'
import {delicaciesfilterReducer} from './DelicaciesFilterSlice'
import {drinksfilterReducer} from './DrinksFilterSlice'
import { hamburgfilterReducer } from './HamburgFilterSlice';
import { chickenfilterReducer } from './ChickenFilterSlice';
import {sortReducer} from './SortSlice'

export const store=configureStore({
    reducer:{
        filter:filterReducer,
        cart: cartReducer,
        delicaciesfilter:delicaciesfilterReducer,
        drinksfilter:drinksfilterReducer,
        hamburgfilter:hamburgfilterReducer,
        chickenfilter:chickenfilterReducer,
        sort:sortReducer,
    },
})

export default store;