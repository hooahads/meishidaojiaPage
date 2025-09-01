import classes from './Meal.module.css'
import Counter from '../../../../../UI/Counter/Counter'

export default function Meal({meal,noDesc}){
    return(
        <div>
            <div className={classes.Meal}>
                <div className={classes.Imgbox}>
                    <img src={meal.img}/>
                </div>
                <div className={classes.DescBox}>
                    <h2 className={classes.Title}>{meal.title}</h2>

                    {/* 只有在 noDesc 不为 true 时才显示 desc */}
                {!noDesc && <p className={classes.Desc}>{meal.desc}</p>}

                    {/* <p className={classes.Desc}>{meal.desc}</p> */}
                    <div className={classes.PriceWrap}>
                        <span className={classes.Price}>￥{meal.price}</span>
                        <Counter
                            meal={meal}
                        />
                        </div>

                </div>
            </div>
        </div>
    )
}