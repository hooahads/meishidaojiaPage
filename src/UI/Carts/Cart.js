import classes from './Cart.module.css'
import IconImg from '../../asset/bag.png'
import { useContext, useEffect } from 'react'
import { CartDetails } from './CartDetails/CartDetails'
import { useState } from 'react'
import Checkout from './Checkout/Checkout'
import {useDispatch, useSelector} from 'react-redux'


export default function Cart(){
    const cart=useSelector((state)=>state.cart)

    const [showDetails,setShowDetails]=useState(false)
    const [showPayment,setShowPayment]=useState(false)

    console.log(cart.totalAmount);
    

    useEffect(() => {
        if(cart.totalAmount===0){
            setShowDetails(false)
            setShowPayment(false)
        }
    },[cart])

    function handleCartDetails(e){
        e.stopPropagation()
        setShowDetails(a=>!a)
        // console.log('被点击啦');
        
    }

    function handleShowPayment(e){
        e.stopPropagation()
        setShowPayment(true)
    }

    function handleOnHide(){
        setShowPayment(false)
    }
     return(

        <div className={classes.Cart} 
            onClick={handleCartDetails}
        >
            
            <div className={classes.Icon}>
                <img src={IconImg}/>
               {cart.totalAmount===0 ? null : <span className={classes.TotalAmount}>{cart.totalAmount}</span>}
            </div>
            
            {/* 引入购物车的详情 */}
            {showDetails && <CartDetails/>}
            

           
           {cart.totalPrice===0 ? 
            (<p className={classes.noMeal}>未选购商品</p>) : (<p className={classes.Peice}>￥{cart.totalPrice}</p>)}
           

            <button
                onClick={handleShowPayment}
                className={`${classes.Button} ${cart.totalAmount===0 ? classes.Disabled : ''}`}
                >去结算
                </button>

                {showPayment && <Checkout
                                    onHide={handleOnHide}
                                />}
        </div>
        

    )
}