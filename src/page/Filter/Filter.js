import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { useEffect } from 'react';
import Meals from './Meals/Meals';
import Tips from './Tips/Tips';
import Cart from '../../UI/Carts/Cart'
import {useSelector,useDispatch} from 'react-redux'
import {selectFilteredMeals, setKeyword} from '../../store/FilterSlice'

export default function Filter(){
    const [keywordInput,setKeywordInput]=useState('')

    const dispatch = useDispatch();
    const filterMeals=useSelector(selectFilteredMeals)
    const filter=useSelector((state)=>state.filter)

    useEffect(()=>{
        // 降低数据过滤的次数
        const timer=setTimeout(()=>{
            // console.log('Effect触发了')
            dispatch(setKeyword(keywordInput))
        },1000)
        // 指定一个清理函数作为返回值,，在下次Effect执行前调用,除上一次Effect执行所带来的影响
        return()=>{
            // console.log('清理函数执行');
            clearTimeout(timer);
        }
    },[keywordInput])

    function inputChangeHandler(e){
        // console.log(e.target.value);
        setKeywordInput(e.target.value.trim()) ;
    }
    // console.log(filterMeals.length);
    
    return(
        <>
        <div className={classes.FilterMeals}>
            <div className={classes.boxflex}>
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.Searchbar}
                />
                <input
                    value={keywordInput}
                    type='text'
                    onChange={inputChangeHandler}
                    className={classes.Input}
                    placeholder='请输入关键字'
                />
            </div> 
        </div>
        {
            filterMeals.length>0 ? <Meals
            mealsData={filterMeals}/>
            :<Tips/>
        }
        <Cart/>
        </>
    )
}