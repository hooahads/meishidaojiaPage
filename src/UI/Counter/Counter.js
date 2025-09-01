
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import {useDispatch, useSelector} from 'react-redux'
import {addItem,removeItem} from '../../store/CartSlice'



export default function Counter({meal}){
    // const ctx=useContext(CartContext)
    const dispatch=useDispatch()
    
    const cartItems = useSelector((state) => state.cart.items);
    // 在购物车的商品列表 (cartItems) 中，​​查找与当前 meal具有相同 id的那个商品​​，
    // 然后获取它的 amount（即购物车中该商品的数量）；如果找不到，就返回默认值 0。
    const currentAmount = cartItems.find(item => item.id === meal.id)?.amount || 0;

console.log(currentAmount);

    function removeHandler(e){
        // e.stopPropagation()
        // ctx.dispatch({type:'REMOVE',meal:meal});
        dispatch(removeItem(meal))
    }

    function addMealHandler(e){
        e.stopPropagation()
        // ctx.dispatch({type:'ADD',meal});
        dispatch(addItem(meal))

    }
   
     return(
         <div className={classes.Counter} >

            { currentAmount>0 ?  <>
                    <button
                    onClick={removeHandler}
                    className={classes.Sub} 
                    >
                        <FontAwesomeIcon icon={faMinus}
                            className={classes.Plus}
                        />
                    </button>
                    <span className={classes.count}>{currentAmount}</span>
            </> : null}


            <button
            onClick={addMealHandler}
                className={classes.Add}>                
                <FontAwesomeIcon icon={faPlus}
                    className={classes.Plus}
                />
            </button>
        </div>
    )
}
        