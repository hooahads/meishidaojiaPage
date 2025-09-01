import FilterMeals from "./FilterMeals/FilterMeals"
import Meals from "./Meals/Meals"
import Cart from '../../../UI/Carts/Cart'
import classes from "./Delicacies.module.css"

export default function Delicacies(){

    return(
        <div >
         <FilterMeals/>
         <Meals/>
         <Cart/>
        </div>
    )
}