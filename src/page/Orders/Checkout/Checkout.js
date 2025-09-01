import ReactDOM from "react-dom"
import { useContext } from "react"
import classes from './Checkout.module.css'
import Checkoutitem from "./Checkoutitem/Checkoutitem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Bar from "./Bar/Bar"
import Confirm from "../../../UI/Confirm/Confirm"
import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { clearCart } from '../../../store/CartSlice'

const checkoutRoot=document.getElementById('checkout-root')

export default function Checkout({onHide}){
    const[showConfirm,setShowConfirm]=useState(false)

    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart.items)
    const cart=useSelector((state)=>state.cart)

    function showConfirmHandle(){
            setShowConfirm(true)
        }
    
        function onOk(){
            // ctx.dispatch({type:'CLEAN'})
            dispatch(clearCart())
            setShowConfirm(false)
        }
    
        function onCancel(){
            setShowConfirm(false)
        }


    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon 
                    onClick={()=>onHide()}
                    icon={faAngleLeft}/>
            </div>

            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <h2 
                        className={classes.CleanerTitle}
                        onClick={showConfirmHandle}
                        >清空购物车</h2>
                       {showConfirm && <Confirm
                            ConfirmText={'确认清空购物车吗？'}
                            onOk={onOk}
                            onCancel={onCancel}
                        />} 
                </header>

                <div className={classes.Meals}>
                    {cartItems.map(item=> <Checkoutitem key={item.id} meal={item}/>)}
                </div>

                <footer className={classes.Footer}>
                        <p className={classes.TotalPrice}>{cart.totalPrice}</p>
                </footer>
            </div>

            <Bar totalPrice={cart.totalPrice}/>
        </div>,checkoutRoot
    )
}