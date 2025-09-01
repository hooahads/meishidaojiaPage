import Meal from './Meal/Meal.js'
import classes from './Meals.module.css'
import { useSelector } from 'react-redux'
import { selectFilteredMeals } from '../../../../store/DrinksFilterSlice.js'

export default function Meals(){
    const filterMeals=useSelector(selectFilteredMeals)
    console.log(filterMeals);
    
    return(
        <div className={classes.Meals}>

            {filterMeals.map(items => 
                <Meal
                    key={items.id}
                    title={items.title}
                    desc={items.desc}
                    price={items.price}
                    img={items.img}
                    meal={items}
                />
            )}
            
        </div>
    )
}