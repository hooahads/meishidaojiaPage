import classes from './Bar.module.css'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

export default function Bar(props){
    const cart=useSelector((state)=>state.cart)

    return(
        <div className={classes.Bar}>
            <div  className={classes.TotalPrice}>￥{props.totalPrice}</div>
            <button className={`${classes.Button} ${cart.totalAmount===0 ? classes.Dis : ''}`}>去支付</button>
        </div>
    )
}