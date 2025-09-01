import Meal from './Meal/Meal.js'
import classes from './Meals.module.css'

export default function Meals({mealsData,addMeals,removeItem}){
    
    return(
        <div className={classes.Meals}>

            {mealsData.map(items => 
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