import classes from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Footer(){
    const location=useLocation()
    const isHomePage= location.pathname === '/';
    const isOrderPage= location.pathname === '/orders';
    const isUserPage= location.pathname === '/user';

    const navigate=useNavigate();
    const cart=useSelector((state)=>state.cart)

    return(
        <div>
            <div className={classes.Container}>
                
            </div>
            <div className={classes.Footer}>
                
                    <div className={classes.Home}
                        onClick={()=>navigate('/')}
                    >   
                        <FontAwesomeIcon icon={faHouse} className={`${isHomePage ? classes.Active : ''}`}/> 
                        <span className={classes.Title}>首页</span>            
                    </div>
                    
                    <div className={classes.Orders}
                        onClick={()=>navigate('/orders')}
                    >
                        <FontAwesomeIcon icon={faCartShopping} className={`${isOrderPage ? classes.Active : ''}`}/>
                        {cart.totalAmount>0 ? 
                            <span className={classes.Number}>{cart.totalAmount}</span>
                            :null
                        }
                        <span className={classes.Title}>购物车</span>  
                    </div>
        
                    <div className={classes.User}
                        onClick={()=>navigate('/user')}
                    >
                        <FontAwesomeIcon icon={faUser} className={`${isUserPage ? classes.Active : ''}`}/>
                        <span className={classes.Title}>我的</span> 
                    </div>
                
            </div>
        </div>
    )
}