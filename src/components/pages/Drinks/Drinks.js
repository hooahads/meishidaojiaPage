import FilterMeals from "./FilterMeals/FilterMeals"
import Meals from "./Meals/Meals"
import Cart from '../../../UI/Carts/Cart'
import classes from "./Drinks.module.css"

export default function Drinks(){

    return(
        <div >
         <FilterMeals/>
         <Meals/>
         <Cart/>
        </div>
    )
}