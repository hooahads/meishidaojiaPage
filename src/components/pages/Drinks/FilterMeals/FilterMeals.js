import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { useEffect } from 'react';

import { setKeyword } from '../../../../store/DrinksFilterSlice';
import {useSelector,useDispatch} from 'react-redux'


export default function FilterMeals(){
    
    const [keywordInput,setKeywordInput]=useState('')
    const dispatch=useDispatch()

    useEffect(()=>{

        const timer=setTimeout(()=>{
            // console.log('Effect触发了') 
            dispatch(setKeyword(keywordInput))
        },1000)

        return()=>{
            // console.log('清理函数执行');
            clearTimeout(timer);
        }
    },[keywordInput])

    function inputChangeHandler(e){
        // console.log(e.target.value);
        setKeywordInput(e.target.value.trim()) ;
    }

    
    return(
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
    )
}