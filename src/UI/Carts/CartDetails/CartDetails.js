import Backdrop from '../../Backdrop/Backdrop'
import classes from './CartDetails.module.css'
import Meal from '../../../page/Filter/Meals/Meal/Meal'
import Confirm from '../../Confirm/Confirm'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { clearCart } from '../../../store/CartSlice'

export function CartDetails(){
    const[showConfirm,setShowConfirm]=useState(false)
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart.items)

    function showConfirmHandle(){
        setShowConfirm(true)
    }

    function onOk(){
        dispatch(clearCart())
        setShowConfirm(false)
    }

    function onCancel(){
        setShowConfirm(false)
    }

    return(
        <div>
            <Backdrop>


                <div className={classes.CartDetails}
                onClick={e => {
                e.stopPropagation()}}
                >
                    <header className={classes.Header}>
                        <h2 className={classes.Title}>餐品详情</h2>
                        <div className={classes.Clear}
                            // onClick={showConfirmHandler}
                        >    
                            <span
                                onClick={showConfirmHandle}
                            >清空购物车</span>
                            {showConfirm && <Confirm
                                ConfirmText={'确认清空购物车吗？'}
                                onOk={onOk}
                                onCancel={onCancel}
                            />}
                        </div>
                    </header>

                    <div className={classes.MealList}>
                        {
                           cartItems.map(item=>
                                <Meal
                                    noDesc={true}
                                    key={item.id}
                                    meal={item}
                                    
                                />
                            )
                        }
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}