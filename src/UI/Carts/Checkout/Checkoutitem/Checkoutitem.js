import classes from './Checkoutitem.module.css'
import Counter from '../../../Counter/Counter'

export default function Checkoutitem(props){
    return(
        <div className={classes.CheckoutItem}>
            <div className={classes.MealImg}>
                <img src={props.meal.img}/>
            </div>

            <div className={classes.Desc}>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <div className={classes.PricOuter}>
                    <Counter meal={props.meal}/>
                    <div className={classes.Price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    )
}