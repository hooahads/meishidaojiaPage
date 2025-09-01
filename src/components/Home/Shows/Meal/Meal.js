import classes from './Meal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import Counter from '../../../../UI/Counter/Counter'

export default function Meal(props){
        return(
            <div className={classes.ShowsPane}>
                <div className={classes.Show}>
                    <div className={classes.Img}>
                        <img className={classes.Img} src={props.img}/>
                    </div>
    
                    <div className={classes.RightSize}>
                            <div className={classes.Title}>{props.title}</div>
                            <div className={classes.Title2}>{props.desc}</div>
                            <div className={classes.Title3}>评分{props.like}  <span className={classes.Sell}>销量{props.sell}+</span></div>

                            <div className={classes.Title4}><span className={classes.Yuan}>￥{props.price}</span>

                                <div className={classes.IconBase}>
                                   <Counter
                                    meal={props.meal}
                                    />
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        )
}