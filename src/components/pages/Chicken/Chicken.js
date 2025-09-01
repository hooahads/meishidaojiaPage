import FilterMeals from "./FilterMeals/FilterMeals"
import Meals from "./Meals/Meals"
import Cart from '../../../UI/Carts/Cart'

export default function Chicken(){

    return(
        <div >
         <FilterMeals/>
         <Meals/>
         <Cart/>
        </div>
    )
}