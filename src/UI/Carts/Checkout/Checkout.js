import ReactDOM from "react-dom"
import { useContext } from "react"
import classes from './Checkout.module.css'
import Checkoutitem from "./Checkoutitem/Checkoutitem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import Bar from "./Bar/Bar"
import { useDispatch,useSelector } from "react-redux"

const checkoutRoot=document.getElementById('checkout-root')

export default function Checkout({onHide}){

    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart.items)
    const cart=useSelector((state)=>state.cart)


    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon 
                    onClick={()=>onHide()}
                    icon={faXmark}/>
            </div>

            <div className={classes.MealsDesc}>
                <header>
                    <h2 className={classes.Title}>餐品详情</h2>
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