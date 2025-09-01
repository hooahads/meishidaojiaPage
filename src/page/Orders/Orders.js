import classes from './Orders.module.css'
import Checkout from './Checkout/Checkout'

export default function Orders(){
    return(
        <div className={classes.Orders}>
            <Checkout/>
        </div>
    )
}