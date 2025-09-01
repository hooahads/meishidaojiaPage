import classes from './Shows.module.css'
import Meal from './Meal/Meal'
import {selectFilteredMeals} from '../../../store/SortSlice'
import { useSelector } from 'react-redux'

export default function Shows({mealsData}){
    const filtedmeals=useSelector(selectFilteredMeals);
    return(
        <div className={classes.ShowsPane}>
             {filtedmeals.map(items => 
                <Meal
                    key={items.id}
                    title={items.title}
                    desc={items.desc}
                    like={items.like}
                    sell={items.sell}
                    price={items.price}
                    img={items.img}
                    meal={items}
                />
            )}
        </div>
    )
}